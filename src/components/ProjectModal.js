import React, { useState, useEffect, useCallback } from "react";
import PDFViewer from "./PDFViewer";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToNextImage = useCallback(() => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [project.images]);

  const goToPreviousImage = useCallback(() => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  }, [project.images]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPreviousImage, goToNextImage]);

  if (!isOpen || !project) return null;

  const currentImage =
    project.images && project.images.length > 0
      ? project.images[currentImageIndex]
      : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-[var(--primary-40)] to-[var(--secondary-40)] rounded-2xl border-2 border-[var(--primary-color)]/50 backdrop-blur-md overflow-hidden shadow-2xl">
        {/* Additional overlay for better readability */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl pointer-events-none"></div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[var(--primary-color)]/60 hover:bg-[var(--primary-color)]/70 rounded-full flex items-center justify-center text-white hover:text-[var(--primary-color)]/80 transition-all duration-200 shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-[600px] relative z-10">
          {/* Left Side - Image Gallery or PDF Viewer */}
          <div className="lg:w-1/2 relative">
            {project.pdfUrl ? (
              // PDF Viewer for documents
              <div className="h-full">
                <PDFViewer pdfUrl={project.pdfUrl} title={project.title} />
              </div>
            ) : currentImage ? (
              <div className="relative h-full flex items-center justify-center bg-gray-900/20">
                <img
                  src={currentImage}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Image Navigation Arrows */}
                {project.images && project.images.length > 1 && (
                  <>
                    <button
                      onClick={goToPreviousImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary-10)] to-[var(--secondary-10)]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary-color)]/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-[var(--primary-color)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-[var(--primary-color)] font-medium">
                    No Images Available
                  </p>
                  <p className="text-[var(--primary-color)]/70 text-sm">
                    Images coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Project Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col overflow-hidden">
            {/* Project Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {project.title}
            </h2>

            {/* Full Description - Scrollable */}
            <div className="flex-1 mb-6 min-h-0">
              <div className="relative h-full max-h-80 overflow-y-auto pr-3 custom-scrollbar border border-[var(--primary-color)]/20 rounded-lg p-4 bg-[var(--primary-color)]/5">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.fullDescription || project.description}
                </p>
                {/* Scroll indicator */}
                <div className="sticky bottom-2 right-2 text-[var(--primary-color)]/60 text-xs float-right">
                  <svg
                    className="w-4 h-4 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--primary-color)]/30 text-[var(--primary-color)] rounded-lg border border-[var(--primary-color)]/30 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)]/20 text-[var(--primary-color)] rounded-lg border border-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/30 hover:border-[var(--primary-color)]/50 transition-all duration-200 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              )}
              {project.developmentStatus && (
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)]/20 text-[var(--primary-color)] rounded-lg border border-[var(--primary-color)]/30 text-sm font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {project.developmentStatus}
                </div>
              )}
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary-color)]/20 text-[var(--secondary-color)] rounded-lg border border-[var(--secondary-color)]/30 hover:bg-[var(--secondary-color)]/30 hover:border-[var(--secondary-color)]/50 transition-all duration-200 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary-color)]/20 text-[var(--secondary-color)] rounded-lg border border-[var(--secondary-color)]/30 hover:bg-[var(--secondary-color)]/30 hover:border-[var(--secondary-color)]/50 transition-all duration-200 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
