// index.ts

"use strict";

import * as angular from "angular";

const fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf"
  }
};

const PdfPrinter: any = require("./libs/printer");
const printer = new PdfPrinter(fonts);
import * as fs from "fs";

class MyController1 {
  public onClick() {
    const docDefinition = {
      content: [
        "First paragraph",
        "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines"
      ]
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);

    pdfDoc.pipe(fs.createWriteStream("pdfs/basics.pdf"));
    pdfDoc.end();
  }
}

angular.module("MyApp")
  .controller("MyController1", MyController1);
