'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onNext: () => void;
  onPrev: () => void;
  currentMatch: number;
  totalMatches: number;
  onClose: () => void;
  isSearching?: boolean;
  isIndexing?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onNext,
  onPrev,
  currentMatch,
  totalMatches,
  onClose,
  isSearching = false,
  isIndexing = false,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        onPrev();
      } else {
        onNext();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const statusText = (() => {
    if (!query) return '';
    if (isIndexing) return 'Indexing pages...';
    if (isSearching) return 'Searching...';
    if (totalMatches === 0) return 'No matches yet';
    return `${currentMatch} of ${totalMatches}`;
  })();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl text-gray-900 dark:text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/40 dark:border-white/10 w-full"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-hts-primary/10 to-hts-secondary/20 text-hts-primary dark:text-hts-secondary">
        <Search className="w-4 h-4" />
      </div>
      
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search in PDF..."
        className="bg-transparent border-none outline-none text-sm flex-1 min-w-[200px] placeholder-gray-500 dark:placeholder-gray-400"
      />

      {statusText && (
        <span className="text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {statusText}
        </span>
      )}

      <div className="flex items-center gap-1">
        <button
          onClick={onPrev}
          disabled={totalMatches === 0}
          className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded disabled:opacity-30 transition-colors"
          title="Previous match (Shift+Enter)"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        
        <button
          onClick={onNext}
          disabled={totalMatches === 0}
          className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded disabled:opacity-30 transition-colors"
          title="Next match (Enter)"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={onClose}
        className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors"
        title="Close search (Esc)"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default SearchBar;
