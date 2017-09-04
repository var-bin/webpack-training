// constants.js

"use sctrict";

const path = require(path);

const ROOT = path.resolve(__dirname, "..");
const BUILD_DIRECTORY = "build";
const BUILD_DIRECTORY_PATH = path.join(__dirname, "..", BUILD_DIRECTORY);
const OUTPUT_FILENAME = "[name].bundle.js";
const IMAGES_FILENAME = "images/[name].[ext]";
const CSS_FILENAME = "css/[name].css";
const FONTS_FILENAME = "fonts/[name].[ext]";
const INDEX_PATH = path.resolve("./index.html");
const MANIFEST_NAME = "manifest";

const constants = {
  root: ROOT,
  buildDirectory: BUILD_DIRECTORY,
  entry: {
    app: "./src/app.ts",
    index: "./src/index.ts"
  },
  output: {
    filename: OUTPUT_FILENAME,
    path: BUILD_DIRECTORY_PATH
  },
  imagesFilename: IMAGES_FILENAME,
  fontsFilename: FONTS_FILENAME,
  cssFilename: CSS_FILENAME,
  indexPath: INDEX_PATH,
  manifestName: MANIFEST_NAME,
  devServer: {
    contentBase: path.resolve(`../${BUILD_DIRECTORY}`),
    port: 3001
  }
};
