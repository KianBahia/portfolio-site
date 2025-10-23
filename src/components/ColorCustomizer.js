import React, { useState, useEffect } from "react";

const ColorCustomizer = ({ isOpen, onClose }) => {
  console.log("ColorCustomizer rendered, isOpen:", isOpen);
  const [primaryColor, setPrimaryColor] = useState("#ef4444"); // red-500
  const [secondaryColor, setSecondaryColor] = useState("#f97316"); // orange-500
  const [accentColor, setAccentColor] = useState("#dc2626"); // red-600

  // Preset themes
  const themes = {
    red: { primary: "#ef4444", secondary: "#f97316", accent: "#dc2626" },
    blue: { primary: "#3b82f6", secondary: "#06b6d4", accent: "#1d4ed8" },
    purple: { primary: "#8b5cf6", secondary: "#ec4899", accent: "#7c3aed" },
    green: { primary: "#10b981", secondary: "#f59e0b", accent: "#059669" },
    pink: { primary: "#ec4899", secondary: "#f472b6", accent: "#be185d" },
    teal: { primary: "#14b8a6", secondary: "#06b6d4", accent: "#0d9488" },
  };

  // Apply colors to CSS custom properties
  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.style.setProperty("--primary-color", primaryColor);
      root.style.setProperty("--secondary-color", secondaryColor);
      root.style.setProperty("--accent-color", accentColor);

      // Create gradient variations
      root.style.setProperty("--primary-20", `${primaryColor}33`); // 20% opacity
      root.style.setProperty("--primary-30", `${primaryColor}4d`); // 30% opacity
      root.style.setProperty("--primary-40", `${primaryColor}66`); // 40% opacity
      root.style.setProperty("--secondary-20", `${secondaryColor}33`); // 20% opacity
      root.style.setProperty("--secondary-30", `${secondaryColor}4d`); // 30% opacity
      root.style.setProperty("--secondary-40", `${secondaryColor}66`); // 40% opacity
    }
  }, [primaryColor, secondaryColor, accentColor]);

  // Load saved colors from localStorage
  useEffect(() => {
    const savedColors = localStorage.getItem("portfolio-colors");
    if (savedColors) {
      const colors = JSON.parse(savedColors);
      setPrimaryColor(colors.primary);
      setSecondaryColor(colors.secondary);
      setAccentColor(colors.accent);
    }
  }, []);

  // Save colors to localStorage
  const saveColors = () => {
    localStorage.setItem(
      "portfolio-colors",
      JSON.stringify({
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor,
      })
    );
    onClose(); // Close the modal after saving
  };

  // Apply preset theme
  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    setPrimaryColor(theme.primary);
    setSecondaryColor(theme.secondary);
    setAccentColor(theme.accent);
    saveColors();
  };

  // Reset to default
  const resetToDefault = () => {
    setPrimaryColor("#ef4444");
    setSecondaryColor("#f97316");
    setAccentColor("#dc2626");
    saveColors();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl border-2 border-white/20 backdrop-blur-md p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Colour Customiser</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
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
        </div>

        {/* Preset Themes */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Preset Themes
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(themes).map(([name, colors]) => (
              <button
                key={name}
                onClick={() => applyTheme(name)}
                className="p-3 rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-200 capitalize"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                }}
              >
                <span className="text-white text-sm font-medium">{name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Pickers */}
        <div className="space-y-6">
          {/* Primary Color */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Primary Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="#ef4444"
                />
              </div>
            </div>
          </div>

          {/* Secondary Color */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Secondary Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="#f97316"
                />
              </div>
            </div>
          </div>

          {/* Accent Color */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Accent Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="#dc2626"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-6 p-4 rounded-lg border border-white/20">
          <h4 className="text-sm font-medium text-white mb-2">Preview</h4>
          <div
            className="h-16 rounded-lg flex items-center justify-center text-white font-medium"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}33, ${secondaryColor}33)`,
              border: `2px solid ${primaryColor}4d`,
            }}
          >
            Your Theme Preview
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={saveColors}
            className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200"
          >
            Save Colors
          </button>
          <button
            onClick={resetToDefault}
            className="flex-1 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg border border-red-500/30 transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorCustomizer;
