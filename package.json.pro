{
  "name": "color-functions-hexipi",
  "version": "0.1.6",
  "main": "./lib/ColorFunctions.js",
  "types": "./lib/ColorFunctions.d.ts",
  "dependencies": {
    "color": "^3.1.2",
    "@types/color": "^3.0.1"
  },
  "scripts": {
    "prebuild": "tsc",
    "build": "webpack"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@types/react-dom": "^16.9.8",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "path": "^0.12.7",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "source-map-loader": "^1.0.1",
    "ts-loader": "^8.0.1",
    "typescript": "^3.9.7",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12"
  },
  "files": [
    "lib/**/*"
  ],
  "description": "These are functions that can be used to for immutable color conversions and manipulations with support for CSS color strings, as well as being able to find various color harmonies based on a given color.",
  "author": "Jose A. Alvarado",
  "license": "MIT"
}
