import React, { useState, useRef } from "react";

const PDFViewer = ({ pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    setError("Failed to load PDF. Please try again.");
  };

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading PDF...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <p className="text-red-600 mb-2">{error}</p>
            <button
              onClick={() => window.open(pdfUrl, "_blank")}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Open PDF in New Tab
            </button>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
        title={title}
        className="w-full h-full border-0"
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};

export default PDFViewer;

