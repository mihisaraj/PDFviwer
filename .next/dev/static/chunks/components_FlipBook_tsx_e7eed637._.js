(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/FlipBook.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pageflip$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-pageflip/build/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/dist/Document.js [app-client] (ecmascript) <export default as Document>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/dist/Page.js [app-client] (ecmascript) <export default as Page>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript) <export * as pdfjs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Configure PDF worker from local copy to avoid CORS issues on mobile/web
if ("TURBOPACK compile-time truthy", 1) {
    // Build an absolute URL for the worker to avoid basePath and CDN edge cases
    const workerUrl = new URL('/pdf.worker.min.mjs', window.location.origin).toString();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].GlobalWorkerOptions.workerSrc = workerUrl;
}
// ForwardRef is needed for HTMLFlipBook children
const PDFPage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ pageNumber, width, height, density = 'soft' }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "bg-white shadow-md overflow-hidden",
        "data-density": density,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__["Page"], {
                    pageNumber: pageNumber,
                    width: width,
                    height: height,
                    className: "w-full h-full",
                    renderTextLayer: false,
                    renderAnnotationLayer: false
                }, void 0, false, {
                    fileName: "[project]/components/FlipBook.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none bg-gradient-to-r from-black/5 via-transparent to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/FlipBook.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/FlipBook.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/FlipBook.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c = PDFPage;
PDFPage.displayName = 'PDFPage';
const FlipBook = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s(({ file, onPageChange, onLoadSuccess, usePortrait = false, zoom = 1 }, ref)=>{
    _s();
    const [numPages, setNumPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerSize, setContainerSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlipBook.useEffect": ()=>{
            const element = containerRef.current;
            if (!element) return;
            const resizeObserver = new ResizeObserver({
                "FlipBook.useEffect": (entries)=>{
                    for (const entry of entries){
                        const { width, height } = entry.contentRect;
                        setContainerSize({
                            width,
                            height
                        });
                    }
                }
            }["FlipBook.useEffect"]);
            resizeObserver.observe(element);
            return ({
                "FlipBook.useEffect": ()=>resizeObserver.disconnect()
            })["FlipBook.useEffect"];
        }
    }["FlipBook.useEffect"], []);
    const { width: containerWidth, height: containerHeight } = containerSize;
    const onDocumentLoadSuccess = (data)=>{
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
    const maxTotalWidth = containerWidth ? usePortrait ? containerWidth * 0.95 : containerWidth * 1.4 : undefined;
    if (maxTotalWidth && currentTotalWidth > maxTotalWidth) {
        const scaleDown = maxTotalWidth / currentTotalWidth;
        bookWidth *= scaleDown;
        bookHeight *= scaleDown;
    }
    // Round values to avoid sub-pixel rendering issues
    bookHeight = Math.floor(bookHeight);
    bookWidth = Math.floor(bookWidth);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full flex items-center justify-center bg-transparent overflow-auto relative p-2 sm:p-4",
        children: !containerWidth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/FlipBook.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                " Loading Viewer..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/FlipBook.tsx",
            lineNumber: 121,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-sm text-red-200 max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold mb-1",
                    children: "Could not load PDF."
                }, void 0, false, {
                    fileName: "[project]/components/FlipBook.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "opacity-80 break-words",
                    children: loadError
                }, void 0, false, {
                    fileName: "[project]/components/FlipBook.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/FlipBook.tsx",
            lineNumber: 125,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__["Document"], {
            file: file,
            onLoadSuccess: onDocumentLoadSuccess,
            onLoadError: (err)=>{
                console.error('Failed to load PDF', err);
                const msg = typeof err === 'string' ? err : err?.message || 'Please refresh or try a different network.';
                setLoadError(msg);
            },
            loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/FlipBook.tsx",
                        lineNumber: 140,
                        columnNumber: 15
                    }, void 0),
                    " Loading PDF..."
                ]
            }, void 0, true, {
                fileName: "[project]/components/FlipBook.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, void 0),
            className: "flex justify-center items-center",
            children: numPages > 0 && // @ts-ignore - react-pageflip types can be tricky
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pageflip$2f$build$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: bookWidth,
                height: bookHeight,
                size: "fixed",
                minWidth: 200,
                maxWidth: 1000,
                minHeight: 300,
                maxHeight: 1533,
                maxShadowOpacity: 0.5,
                showCover: true,
                mobileScrollSupport: true,
                className: "shadow-2xl",
                ref: ref,
                onFlip: (e)=>onPageChange?.(e.data + 1),
                flippingTime: 1000,
                usePortrait: usePortrait,
                startZIndex: 0,
                autoSize: true,
                drawShadow: true,
                showPageCorners: true,
                disableFlipByClick: false,
                children: Array.from(new Array(numPages), (el, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PDFPage, {
                        pageNumber: index + 1,
                        width: bookWidth,
                        height: bookHeight
                    }, `page_${index + 1}`, false, {
                        fileName: "[project]/components/FlipBook.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            }, `${usePortrait ? 'portrait' : 'landscape'}-${Math.round(adjustedZoom * 100)}`, false, {
                fileName: "[project]/components/FlipBook.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/FlipBook.tsx",
            lineNumber: 130,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/FlipBook.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "4BLY9l7+9c+R2BHsaFkfz30nHzk=")), "4BLY9l7+9c+R2BHsaFkfz30nHzk=");
_c2 = FlipBook;
FlipBook.displayName = 'FlipBook';
const __TURBOPACK__default__export__ = FlipBook;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PDFPage");
__turbopack_context__.k.register(_c1, "FlipBook$forwardRef");
__turbopack_context__.k.register(_c2, "FlipBook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FlipBook.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/FlipBook.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_FlipBook_tsx_e7eed637._.js.map