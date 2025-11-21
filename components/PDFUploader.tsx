'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, FileText } from 'lucide-react';

interface PDFUploaderProps {
  onUpload: (file: File) => void;
}

const PDFUploader: React.FC<PDFUploaderProps> = ({ onUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Immersive PDF Viewer
        </h1>
        <p className="text-gray-400">Experience your documents like a real book</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <div
          {...getRootProps()}
          className={`
            p-12 rounded-3xl border-2 border-dashed cursor-pointer
            flex flex-col items-center justify-center transition-all duration-300
            hover:scale-[1.02] active:scale-[0.98]
            ${
              isDragActive
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="w-20 h-20 mb-6 rounded-full bg-gray-700 flex items-center justify-center">
            {isDragActive ? (
              <FileText className="w-10 h-10 text-blue-400" />
            ) : (
              <Upload className="w-10 h-10 text-gray-400" />
            )}
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {isDragActive ? 'Drop your PDF here' : 'Upload your PDF'}
          </h3>
          <p className="text-gray-500 text-center max-w-xs">
            Drag and drop your PDF file here, or click to browse your files
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PDFUploader;
