const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Log the environment for debugging
console.log("Node version:", process.version);
console.log("NPM version:", execSync("npm -v").toString().trim());
console.log("Current working directory:", process.cwd());
console.log("Environment:", process.env.NODE_ENV);

// Function to check if a module exists in node_modules
function checkModule(moduleName) {
  const modulePath = path.join(process.cwd(), "node_modules", moduleName);

  if (fs.existsSync(modulePath)) {
    console.log(`✅ ${moduleName} found in node_modules`);
    return true;
  } else {
    console.log(`❌ ${moduleName} not found in node_modules`);
    return false;
  }
}

// Function to install a module if it doesn't exist
function ensureModule(moduleName, version) {
  if (!checkModule(moduleName)) {
    console.log(`Installing ${moduleName}@${version}...`);
    try {
      execSync(`npm install --no-save ${moduleName}@${version}`, {
        stdio: "inherit",
      });
      console.log(`${moduleName}@${version} installed successfully`);
    } catch (error) {
      console.error(`Failed to install ${moduleName}@${version}:`, error);
    }
  }
}

// Ensure required modules are installed
ensureModule("tailwindcss", "3.4.1");
ensureModule("postcss", "8.5.6");
ensureModule("autoprefixer", "10.4.21");

// Create tailwind.config.js if it doesn't exist
const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.js");
if (!fs.existsSync(tailwindConfigPath)) {
  console.log("Creating tailwind.config.js...");
  const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: "Hanken Grotesk",
      },
    },
  },
  plugins: [],
};
`;
  fs.writeFileSync(tailwindConfigPath, tailwindConfig);
  console.log("tailwind.config.js created");
}

// Create postcss.config.js if it doesn't exist
const postcssConfigPath = path.join(process.cwd(), "postcss.config.js");
if (!fs.existsSync(postcssConfigPath)) {
  console.log("Creating postcss.config.js...");
  const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;
  fs.writeFileSync(postcssConfigPath, postcssConfig);
  console.log("postcss.config.js created");
}

// Also create postcss.config.cjs for compatibility
const postcssConfigCjsPath = path.join(process.cwd(), "postcss.config.cjs");
if (!fs.existsSync(postcssConfigCjsPath)) {
  console.log("Creating postcss.config.cjs...");
  const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;
  fs.writeFileSync(postcssConfigCjsPath, postcssConfig);
  console.log("postcss.config.cjs created");
}

// Verify the module resolution
try {
  // Try to require tailwindcss to verify it can be resolved
  require.resolve("tailwindcss");
  console.log("✅ tailwindcss can be resolved");
} catch (error) {
  console.error("❌ tailwindcss cannot be resolved:", error);

  // As a last resort, create a symlink to ensure it's accessible
  try {
    console.log("Attempting to create symlink for tailwindcss...");
    execSync("npm link tailwindcss", { stdio: "inherit" });
  } catch (linkError) {
    console.error("Failed to create symlink:", linkError);
  }
}

console.log("Setup complete!");
