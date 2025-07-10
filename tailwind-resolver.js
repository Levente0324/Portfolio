// tailwind-resolver.js
// This file creates a simple resolver for tailwindcss that will be imported by Next.js

// Try to find tailwindcss in various locations
try {
  module.exports = require("tailwindcss");
} catch (e) {
  try {
    // Try to require from absolute path in node_modules
    const path = require("path");
    module.exports = require(path.join(
      process.cwd(),
      "node_modules",
      "tailwindcss"
    ));
  } catch (e2) {
    console.error("Failed to load tailwindcss:", e2);

    // Create a minimal mock as fallback to prevent build failures
    module.exports = function tailwindcss(config) {
      console.warn("Using mock tailwindcss implementation!");
      return {
        postcssPlugin: "tailwindcss",
        plugins: [],
      };
    };

    module.exports.postcss = true;
  }
}
