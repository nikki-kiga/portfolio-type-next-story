/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require('next-optimized-images');
module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
});
