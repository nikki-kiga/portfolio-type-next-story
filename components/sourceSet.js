const sourceSet = [
  {
    // This source produce a webp image
    type: 'image/webp',
    // The rules for this source
    rules: {
      // When screen is less wider than 300px
      '300w': {
        // Use this caravaggio options to produce the image
        opt: {
          o: 'webp',
          rs: {
            s: '300x',
          },
        },
      },
      // Use this for screen large up to 600px
      '600w': {
        opt: {
          o: 'webp',
          rs: {
            s: '600x',
          },
        },
      },
    },
  },
  // This is the second set, we want it for browsers
  // not capable of handling webp images.
  // The rules are the same except for the output format
  {
    rules: {
      '300w': {
        opt: {
          rs: {
            s: '300x',
          },
        },
      },
      '600w': {
        opt: {
          rs: {
            s: '600x',
          },
        },
      },
    },
  },
];

export default sourceSet;
