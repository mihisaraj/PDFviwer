'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, BookOpen, Book, Sun, Moon, ChevronUp, ChevronDown } from 'lucide-react';

interface ControlPanelProps {
  currentPage: number;
  numPages: number;
  onPrev: () => void;
  onNext: () => void;
  onAutoRoll: () => void;
  isAutoRolling: boolean;
  onReset: () => void;
  onToggleView: () => void;
  isSinglePage: boolean;
  onToggleTheme: () => void;
  isDarkMode: boolean;
  onPageInput: (page: number) => void;
  isMobile: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  currentPage,
  numPages,
  onPrev,
  onNext,
  onAutoRoll,
  isAutoRolling,
  onReset,
  onToggleView,
  isSinglePage,
  onToggleTheme,
  isDarkMode,
  onPageInput,
  isMobile,
}) => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handlePageSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = parseInt(e.currentTarget.value);
      if (!isNaN(val) && val >= 1 && val <= numPages) {
        onPageInput(val);
        setShowInput(false);
      }
    } else if (e.key === 'Escape') {
      setShowInput(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 pointer-events-none">
      {isMobile && !isOpen && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto bg-white/90 dark:bg-white/10 border border-white/50 dark:border-white/10 rounded-full px-3 py-2 text-xs font-semibold text-gray-700 dark:text-white shadow-lg flex items-center gap-2"
            title="Show controls"
          >
            <ChevronUp className="w-4 h-4" />
            Tools
          </button>
        </div>
      )}

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="pointer-events-auto"
          >
            <div className="relative mx-auto max-w-5xl backdrop-blur-2xl bg-white/90 dark:bg-white/5 border border-white/25 dark:border-white/10 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.5)] rounded-2xl px-4 py-3 sm:px-6 sm:py-4">
              {isMobile && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-full p-1.5 shadow-md"
                  title="Hide tools"
                >
                  <ChevronDown className="w-4 h-4 text-gray-700 dark:text-white" />
                </button>
              )}
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={onPrev}
                    disabled={currentPage <= 1}
                    className="p-2 rounded-full bg-gradient-to-br from-white to-gray-100 text-gray-700 dark:from-white/10 dark:to-white/5 dark:text-white border border-white/50 dark:border-white/10 hover:-translate-y-0.5 transition-all disabled:opacity-60"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center justify-center min-w-[110px]">
                    {showInput ? (
                      <div className="flex items-center gap-1">
                        <input 
                          ref={inputRef}
                          type="number" 
                          min={1} 
                          max={numPages}
                          defaultValue={currentPage}
                          onBlur={() => setShowInput(false)}
                          onKeyDown={handlePageSubmit}
                          className="w-12 bg-white/60 dark:bg-white/10 border border-gray-300 dark:border-white/15 rounded px-2 text-center text-sm focus:outline-none focus:ring-2 focus:ring-hts-secondary text-gray-900 dark:text-white"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">/ {numPages || '...'}</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowInput(true)}
                        className="text-sm font-semibold text-gray-700 dark:text-gray-100 px-2 py-1 rounded-md hover:bg-gray-100/70 dark:hover:bg-white/10 transition-colors"
                        title="Jump to page"
                      >
                        {numPages > 0 ? `Page ${currentPage}` : 'Loading pages...'}
                      </button>
                    )}
                  </div>

                  <button
                    onClick={onNext}
                    disabled={currentPage >= numPages}
                    className="p-2 rounded-full bg-gradient-to-br from-white to-gray-100 text-gray-700 dark:from-white/10 dark:to-white/5 dark:text-white border border-white/50 dark:border-white/10 hover:-translate-y-0.5 transition-all disabled:opacity-60"
                    title="Next Page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center flex-wrap gap-2 sm:gap-3 justify-end">
                  <button
                    onClick={onToggleView}
                    className="p-2 rounded-full bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/15 text-gray-800 dark:text-white hover:-translate-y-0.5 transition-all"
                    title={isSinglePage ? "Switch to Double Page" : "Switch to Single Page"}
                  >
                    {isSinglePage ? <BookOpen className="w-5 h-5" /> : <Book className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-full bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/15 text-gray-800 dark:text-white hover:-translate-y-0.5 transition-all"
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={onAutoRoll}
                    className={`p-2 rounded-full border transition-all ${
                      isAutoRolling
                        ? 'bg-gradient-to-r from-hts-secondary to-amber-400 text-gray-900 border-transparent shadow-lg shadow-amber-400/30'
                        : 'bg-white/70 dark:bg-white/10 text-gray-800 dark:text-white border-white/40 dark:border-white/15 hover:-translate-y-0.5'
                    }`}
                    title={isAutoRolling ? 'Stop Auto-roll' : 'Start Auto-roll'}
                  >
                    {isAutoRolling ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={onReset}
                    className="p-2 rounded-full bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/15 text-red-500 hover:-translate-y-0.5 transition-all"
                    title="Reset Viewer"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center text-xs sm:text-sm uppercase tracking-[0.24em] text-gray-600 dark:text-gray-200">
                Page {currentPage} of {numPages || '...'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ControlPanel;
