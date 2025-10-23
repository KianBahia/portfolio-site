// Utility functions for dynamic color management

export const getColorClasses = () => {
  return {
    // Primary color variations
    primary: {
      bg: "bg-[var(--primary-color)]",
      text: "text-[var(--primary-color)]",
      border: "border-[var(--primary-color)]",
      bg20: "bg-[var(--primary-20)]",
      bg30: "bg-[var(--primary-30)]",
      bg40: "bg-[var(--primary-40)]",
      bg50: "bg-[var(--primary-50)]",
      border30: "border-[var(--primary-30)]",
      border40: "border-[var(--primary-40)]",
      border50: "border-[var(--primary-50)]",
    },
    // Secondary color variations
    secondary: {
      bg: "bg-[var(--secondary-color)]",
      text: "text-[var(--secondary-color)]",
      border: "border-[var(--secondary-color)]",
      bg20: "bg-[var(--secondary-20)]",
      bg30: "bg-[var(--secondary-30)]",
      bg40: "bg-[var(--secondary-40)]",
      bg50: "bg-[var(--secondary-50)]",
      border30: "border-[var(--secondary-30)]",
      border40: "border-[var(--secondary-40)]",
      border50: "border-[var(--secondary-50)]",
    },
    // Accent color
    accent: {
      bg: "bg-[var(--accent-color)]",
      text: "text-[var(--accent-color)]",
      border: "border-[var(--accent-color)]",
    },
  };
};

// Helper function to create gradient classes
export const getGradientClasses = (direction = "br") => {
  return `bg-gradient-to-${direction} from-[var(--primary-20)] to-[var(--secondary-20)]`;
};

// Helper function to create hover gradient classes
export const getHoverGradientClasses = (direction = "br") => {
  return `hover:from-[var(--primary-30)] hover:to-[var(--secondary-30)]`;
};
