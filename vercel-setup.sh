#!/bin/bash

# Print node and npm versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Force install tailwindcss and postcss packages into the node_modules folder
npm install --no-save tailwindcss@3.4.1 postcss@8.5.6 autoprefixer@10.4.21

# Verify the installations by checking node_modules
echo "Verifying tailwindcss installation..."
if [ -d "node_modules/tailwindcss" ]; then
  echo "✅ tailwindcss found in node_modules"
else
  echo "❌ tailwindcss not found in node_modules"
  # Create a symlink from global to local if needed
  npm link tailwindcss
fi

echo "Verifying postcss installation..."
if [ -d "node_modules/postcss" ]; then
  echo "✅ postcss found in node_modules"
else
  echo "❌ postcss not found in node_modules"
  # Create a symlink from global to local if needed
  npm link postcss
fi

echo "Verifying autoprefixer installation..."
if [ -d "node_modules/autoprefixer" ]; then
  echo "✅ autoprefixer found in node_modules"
else
  echo "❌ autoprefixer not found in node_modules"
  # Create a symlink from global to local if needed
  npm link autoprefixer
fi

# Create tailwind.config.js
echo "Creating tailwind.config.js..."
cat > tailwind.config.js << 'EOF'
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
EOF

# Create postcss.config.js
echo "Creating postcss.config.js..."
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

# Also create postcss.config.cjs for compatibility
echo "Creating postcss.config.cjs..."
cat > postcss.config.cjs << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

# Print the directory structure for debugging
echo "Directory structure:"
ls -la

# Print node_modules status
echo "node_modules tailwindcss status:"
ls -la node_modules/tailwindcss || echo "tailwindcss not found in node_modules"

echo "Setup complete!"
