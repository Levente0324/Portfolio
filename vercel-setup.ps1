# Print node and npm versions for debugging
Write-Host "Node version: $(node -v)"
Write-Host "NPM version: $(npm -v)"

# Force install tailwindcss and postcss packages into the node_modules folder
npm install --no-save tailwindcss@3.4.1 postcss@8.5.6 autoprefixer@10.4.21

# Verify the installations by checking node_modules
Write-Host "Verifying tailwindcss installation..."
if (Test-Path "node_modules/tailwindcss") {
  Write-Host "✅ tailwindcss found in node_modules"
} else {
  Write-Host "❌ tailwindcss not found in node_modules"
  # Create a symlink from global to local if needed
  npm link tailwindcss
}

Write-Host "Verifying postcss installation..."
if (Test-Path "node_modules/postcss") {
  Write-Host "✅ postcss found in node_modules"
} else {
  Write-Host "❌ postcss not found in node_modules"
  # Create a symlink from global to local if needed
  npm link postcss
}

Write-Host "Verifying autoprefixer installation..."
if (Test-Path "node_modules/autoprefixer") {
  Write-Host "✅ autoprefixer found in node_modules"
} else {
  Write-Host "❌ autoprefixer not found in node_modules"
  # Create a symlink from global to local if needed
  npm link autoprefixer
}

# Create tailwind.config.js
Write-Host "Creating tailwind.config.js..."
@'
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
'@ | Out-File -FilePath "tailwind.config.js" -Encoding utf8

# Create postcss.config.js
Write-Host "Creating postcss.config.js..."
@'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
'@ | Out-File -FilePath "postcss.config.js" -Encoding utf8

# Also create postcss.config.cjs for compatibility
Write-Host "Creating postcss.config.cjs..."
@'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
'@ | Out-File -FilePath "postcss.config.cjs" -Encoding utf8

# Print the directory structure for debugging
Write-Host "Directory structure:"
Get-ChildItem -Force

# Print node_modules status
Write-Host "node_modules tailwindcss status:"
if (Test-Path "node_modules/tailwindcss") {
  Get-ChildItem "node_modules/tailwindcss"
} else {
  Write-Host "tailwindcss not found in node_modules"
}

Write-Host "Setup complete!"
