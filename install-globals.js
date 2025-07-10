// install-globals.js - Installs critical dependencies globally
const { execSync } = require("child_process");

console.log("Installing critical dependencies globally...");

// List of packages to install globally
const packages = ["tailwindcss@3.4.1", "postcss@8.5.6", "autoprefixer@10.4.21"];

// Install packages globally
try {
  execSync(`npm install -g ${packages.join(" ")}`, { stdio: "inherit" });
  console.log("Global installation complete!");
} catch (error) {
  console.error("Failed to install global packages:", error);
  process.exit(1);
}
