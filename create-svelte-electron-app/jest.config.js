// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.svelte$": "svelte-jester",
//     "^.+\\.js$": "babel-jest",
//     "^.+\\.tsx$": "ts-jest",
//   },
//   moduleFileExtensions: ["js", "ts", "svelte"],
// };

// module.exports = {
//   roots: ["<rootDir>/src"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };
module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
};
