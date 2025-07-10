/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    // Use our custom resolver to ensure tailwindcss is always found
    [require.resolve("./tailwind-resolver.js")]: {},
    autoprefixer: {},
  },
};
