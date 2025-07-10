// module-finder.js
const fs = require("fs");
const path = require("path");

// Log information about the environment
console.log("Module resolution diagnostics:");
console.log("============================");
console.log("Node.js version:", process.version);
console.log("Current working directory:", process.cwd());

// List of modules to check
const modulesToCheck = [
  "tailwindcss",
  "postcss",
  "autoprefixer",
  "next",
  "react",
  "react-dom",
];

// Check each module
modulesToCheck.forEach((moduleName) => {
  try {
    const modulePath = require.resolve(moduleName);
    const modulePackageJson = path.join(
      path.dirname(modulePath),
      "package.json"
    );

    let moduleVersion = "unknown";
    if (fs.existsSync(modulePackageJson)) {
      try {
        const packageData = JSON.parse(
          fs.readFileSync(modulePackageJson, "utf8")
        );
        moduleVersion = packageData.version;
      } catch (err) {
        console.error(`Error reading ${moduleName} package.json:`, err.message);
      }
    }

    console.log(`✅ ${moduleName}@${moduleVersion} found at ${modulePath}`);
  } catch (err) {
    console.error(`❌ ${moduleName} not found:`, err.message);

    // Try to find it manually in node_modules
    const possiblePaths = [
      path.join(process.cwd(), "node_modules", moduleName),
      path.join(process.cwd(), "..", "node_modules", moduleName),
      path.join(process.cwd(), "..", "..", "node_modules", moduleName),
    ];

    possiblePaths.forEach((p) => {
      if (fs.existsSync(p)) {
        console.log(`  Found ${moduleName} at ${p} (but not in module path)`);
      }
    });
  }
});
