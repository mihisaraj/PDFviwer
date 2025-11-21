'use client';

import React, { useState, useRef, forwardRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Loader2 } from 'lucide-react';

// Configure PDF worker from local copy to avoid CORS issues on mobile/web
if (typeof window !== 'undefined') {
  // Build an absolute URL for the worker to avoid basePath and CDN edge cases
  const workerUrl = new URL('/pdf.worker.min.mjs', window.location.origin).toString();
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
}

interface PageProps {
  pageNumber: number;
  width: number;
  height: number;
  density?: 'soft' | 'hard';
}

interface FlipBookProps {
  file: File | string;
  onPageChange?: (page: number) => void;
  onLoadSuccess?: (data: PDFDocumentProxy) => void;
  usePortrait?: boolean;
  zoom?: number;
}

// ForwardRef is needed for HTMLFlipBook children
const PDFPage = forwardRef<HTMLDivElement, PageProps>(({ pageNumber, width, height, density = 'soft' }, ref) => {
  return (
    <div ref={ref} className="bg-white shadow-md overflow-hidden" data-density={density}>
      <div className="relative w-full h-full flex items-center justify-center">
        <Page
          pageNumber={pageNumber}
          width={width}
          height={height}
          className="w-full h-full"
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
        {/* Page shadow/gradient overlay for realism */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/5 via-transparent to-transparent" />
      </div>
    </div>
  );
});

PDFPage.displayName = 'PDFPage';

const FlipBook = forwardRef<any, FlipBookProps>(
  ({ file, onPageChange, onLoadSuccess, usePortrait = false, zoom = 1 }, ref) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({ width, height });
      }
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  const { width: containerWidth, height: containerHeight } = containerSize;

  const onDocumentLoadSuccess = (data: PDFDocumentProxy) => {
    setLoadError(null);
    setNumPages(data.numPages);
    onLoadSuccess?.(data);
  };

  // Calculate optimal book dimensions based on container
  // Enforce A4 aspect ratio (1 / sqrt(2) ≈ 0.707) for realistic PDF look
  const ASPECT_RATIO = 0.707; // Width / Height

  // Base sizing from height, then apply zoom
  const heightFactor = usePortrait ? 0.9 : 0.94;
  const adjustedZoom = Math.max(0.6, Math.min(zoom, 1.6));

  const baseHeight = containerHeight ? containerHeight * heightFactor : 600;
  const baseWidth = baseHeight * ASPECT_RATIO;

  let bookHeight = baseHeight * adjustedZoom;
  let bookWidth = baseWidth * adjustedZoom;

  // Keep within container width to avoid cropping in double-page mode
  const currentTotalWidth = usePortrait ? bookWidth : bookWidth * 2;
  const maxTotalWidth = containerWidth
    ? usePortrait
      ? containerWidth * 0.95
      : containerWidth * 1.4
    : undefined;

  if (maxTotalWidth && currentTotalWidth > maxTotalWidth) {
    const scaleDown = maxTotalWidth / currentTotalWidth;
    bookWidth *= scaleDown;
    bookHeight *= scaleDown;
  }

  // Round values to avoid sub-pixel rendering issues
  bookHeight = Math.floor(bookHeight);
  bookWidth = Math.floor(bookWidth);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center bg-transparent overflow-auto relative p-2 sm:p-4"
    >
      {!containerWidth ? (
        <div className="text-white flex items-center gap-2">
          <Loader2 className="animate-spin" /> Loading Viewer...
        </div>
      ) : loadError ? (
        <div className="text-center text-sm text-red-200 max-w-sm">
          <p className="font-semibold mb-1">Could not load PDF.</p>
          <p className="opacity-80 break-words">{loadError}</p>
        </div>
      ) : (
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => {
            console.error('Failed to load PDF', err);
            const msg = typeof err === 'string' ? err : err?.message || 'Please refresh or try a different network.';
            setLoadError(msg);
          }}
          loading={
            <div className="text-white flex items-center gap-2">
              <Loader2 className="animate-spin" /> Loading PDF...
            </div>
          }
          className="flex justify-center items-center"
        >
          {numPages > 0 && (
            // @ts-ignore - react-pageflip types can be tricky
            <HTMLFlipBook
              key={`${usePortrait ? 'portrait' : 'landscape'}-${Math.round(adjustedZoom * 100)}`} // Force re-render on view/zoom change
              width={bookWidth}
              height={bookHeight}
              size="fixed"
              minWidth={200} // Lower min width for mobile
              maxWidth={1000}
              minHeight={300} // Lower min height for mobile
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true} // This should handle touch scroll
              className="shadow-2xl"
              ref={ref}
              onFlip={(e: any) => onPageChange?.(e.data + 1)}
              flippingTime={1000}
              usePortrait={usePortrait}
              startZIndex={0}
              autoSize={true}
              drawShadow={true}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <PDFPage
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={bookWidth}
                  height={bookHeight}
                />
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      )}
    </div>
  );
});

FlipBook.displayName = 'FlipBook';

export default FlipBook;
