import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group relative cursor-pointer" onClick={handleCardClick}>
        {/* Purple Glass Frame */}
        <div className="bg-gradient-to-br from-[var(--primary-20)] to-[var(--secondary-20)] rounded-2xl border-2 border-[var(--primary-30)] backdrop-blur-sm p-6 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:transform hover:scale-105">
          {/* Project Image */}
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--primary-10)] to-[var(--secondary-10)]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
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
                  <p className="text-[var(--primary-color)] font-medium text-sm">
                    Project Image
                  </p>
                  <p className="text-[var(--primary-color)]/70 text-xs">
                    Coming Soon
                  </p>
                </div>
              </div>
            )}

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Project Content */}
          <div className="space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary-color)] transition-colors">
              {project.title}
            </h3>

            {/* Technologies/Tools */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[var(--primary-color)]/30 text-[var(--primary-color)] rounded-lg border border-[var(--primary-30)] text-sm font-medium hover:bg-[var(--primary-color)]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)]/20 text-[var(--primary-color)] rounded-lg border border-[var(--primary-30)] hover:bg-pink-600/30 hover:border-[var(--primary-color)]/50 transition-all duration-200 text-sm font-medium"
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
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)]/20 text-[var(--primary-color)] rounded-lg border border-[var(--primary-30)] text-sm font-medium">
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
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
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

          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--primary-color)]/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[var(--secondary-color)]/40 rounded-full animate-pulse delay-1000 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProjectCard;
