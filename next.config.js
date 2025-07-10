/** @type {import('next').NextConfig} */
const path = require("path");

// Explicitly require these modules to verify they can be resolved
try {
  require.resolve("tailwindcss");
  require.resolve("postcss");
  require.resolve("autoprefixer");
} catch (error) {
  console.error("Error resolving CSS modules:", error);
  console.log("Attempting to install missing modules...");
  require("child_process").execSync(
    "npm install --no-save tailwindcss@3.4.1 postcss@8.5.6 autoprefixer@10.4.21",
    { stdio: "inherit" }
  );
}

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");

    // Add tailwindcss to the module resolution paths
    config.resolve.modules = [
      path.join(__dirname, "node_modules"),
      "node_modules",
      ...(config.resolve.modules || []),
    ];

    return config;
  },
  // Next.js 15 doesn't use this config directly
  // But we're keeping the code that verifies dependencies above
};

module.exports = nextConfig;
