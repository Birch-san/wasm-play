/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: [
    [
      "snowpack-plugin-swc",
      {
        input: ['.ts'], // (optional) specify files for swc to transform
        // https://swc.rs/docs/configuration/compilation
        transformOptions: {
          sourceMaps: 'inline',
          jsc: {
            parser: {
              syntax: "typescript",
              topLevelAwait: true
            },
            transform: {},
            target: "es2021",
            keepClassNames: true
          }
        }
      }
    ]
  ],
  mount: {
    // Same behavior as the "src" example above:
    src: {url: '/build'},
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: {url: '/', static: true, resolve: false},
    cpp: {url: '/cpp', static: true, resolve: false},
    cpp_out: {url: '/cpp_out', static: true, resolve: false},
  },
  buildOptions: {
    sourcemap: 'inline'
  }
};