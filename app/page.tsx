'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import ControlPanel from '@/components/ControlPanel';
import { useBookSound } from '@/hooks/useBookSound';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import type { PDFDocumentProxy } from 'pdfjs-dist';

// Dynamically import FlipBook to avoid SSR issues with canvas/DOMMatrix
const FlipBook = dynamic(() => import('@/components/FlipBook'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center text-white">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-2" />
      Loading Viewer...
    </div>
  ),
});

export default function Home() {
  const [file] = useState<string | File>('/handbook.pdf');
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [isAutoRolling, setIsAutoRolling] = useState(false);
  const [isSinglePage, setIsSinglePage] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bookRef = useRef<any>(null);
  const wheelLockRef = useRef(0);
  const autoRollTimer = useRef<NodeJS.Timeout | null>(null);
  const viewerShellRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const { playFlip } = useBookSound();

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = document.documentElement.classList.contains('dark') || prefersDark;
    setIsDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (isMobile) {
      setIsSinglePage(true);
    }
  }, [isMobile]);

  const goToPage = useCallback(
    (page: number) => {
      const flipInstance = bookRef.current?.pageFlip?.();
      const totalPages = numPages || flipInstance?.getPageCount?.() || 1;
      const target = Math.min(Math.max(page, 1), totalPages);

      if (flipInstance) {
        flipInstance.flip(target - 1);
      }
      setCurrentPage(target);
    },
    [numPages],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      playFlip();
    },
    [playFlip],
  );

  const handleDocumentLoadSuccess = useCallback((doc: PDFDocumentProxy) => {
    setNumPages(doc.numPages);
    setCurrentPage(1);
  }, []);

  const handlePrev = useCallback(() => {
    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;
    flip.flipPrev();
  }, []);

  const handleNext = useCallback(() => {
    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;
    flip.flipNext();
  }, []);

  const handlePageInput = (page: number) => goToPage(page);

  useEffect(() => {
    if (autoRollTimer.current) {
      clearInterval(autoRollTimer.current);
      autoRollTimer.current = null;
    }
    if (!isAutoRolling) return;

    autoRollTimer.current = setInterval(() => {
      const flip = bookRef.current?.pageFlip?.();
      if (!flip) return;
      if (flip.getCurrentPageIndex() < flip.getPageCount() - 1) {
        flip.flipNext();
      } else {
        setIsAutoRolling(false);
      }
    }, 2000);

    return () => {
      if (autoRollTimer.current) {
        clearInterval(autoRollTimer.current);
      }
    };
  }, [isAutoRolling]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - wheelLockRef.current < 450) return;

    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;

    if (e.deltaY > 0 && flip.getCurrentPageIndex() < flip.getPageCount() - 1) {
      flip.flipNext();
      wheelLockRef.current = now;
    } else if (e.deltaY < 0 && flip.getCurrentPageIndex() > 0) {
      flip.flipPrev();
      wheelLockRef.current = now;
    }
  };

  const handleReset = () => {
    setIsAutoRolling(false);
    goToPage(1);
  };

  const handleToggleView = () => {
    if (isMobile) return;
    setIsSinglePage((prev) => !prev);
  };

  return (
    <main
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-br from-[#0c1224] via-[#0b1a34] to-[#050810]'
              : 'bg-gradient-to-br from-white via-[#f3f7ff] to-[#e6f0ff]'
          }`}
        />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-hts-secondary/20 blur-3xl" />
        <div className="absolute right-[-18%] bottom-[-10%] h-96 w-96 rounded-full bg-hts-primary/25 blur-[120px]" />
        <div className="absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div
        className={`relative min-h-screen flex flex-col gap-8 px-3 sm:px-6 lg:px-10 pb-36 pt-12 w-full ${
          isSinglePage ? 'max-w-6xl' : 'max-w-8xl'
        } mx-auto`}
      >
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="w-full flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-hts-secondary/20 border border-hts-secondary/40 flex items-center justify-center">
              <span className="text-lg font-bold text-hts-primary dark:text-hts-secondary">HTS</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-hts-secondary">Harbour Tech Solutions</p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Rule Book 2025</h1>
            </div>
          </div>
        </motion.header>

        <section className="relative flex-1 w-full" ref={viewerShellRef}>
          <div
            className={`relative w-full rounded-[24px] overflow-hidden ${isSinglePage ? 'h-[74vh] sm:h-[82vh]' : 'h-[80vh] sm:h-[90vh]'}`}
            onWheel={handleWheel}
            onContextMenu={(e) => e.preventDefault()}
          >
            <FlipBook
              file={file}
              onPageChange={handlePageChange}
              onLoadSuccess={handleDocumentLoadSuccess}
              ref={bookRef}
              usePortrait={isSinglePage}
              zoom={1}
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 px-4 py-2 rounded-full bg-white/85 dark:bg-white/10 border border-white/40 dark:border-white/15 text-xs sm:text-sm tracking-[0.22em] uppercase text-gray-700 dark:text-gray-200 shadow-lg">
            Page {currentPage} of {numPages || '...'}
          </div>
        </section>
      </div>

      <ControlPanel
        currentPage={currentPage}
        numPages={numPages}
        onPrev={handlePrev}
        onNext={handleNext}
        onAutoRoll={() => setIsAutoRolling((v) => !v)}
        isAutoRolling={isAutoRolling}
        onReset={handleReset}
        onToggleView={handleToggleView}
        isSinglePage={isSinglePage}
        onToggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onPageInput={handlePageInput}
        isMobile={isMobile}
      />
    </main>
  );
}
