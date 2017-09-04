import * as angular from "angular";
const moment = require("moment") as any;

const pdfMake = require("pdfmake.js") as any;

window["pdfMake"] = pdfMake;
const vfs = require("vfs_fonts.js");
window["pdfMake"]["vfs"] = vfs;

class MyController {
  public sayHi() {
    const now = moment().format("LLLL");

    return `Say hi from AngularJS! ${now}`;
  }

  public onClick() {
    const docDefinition = {
      content: "This is an sample PDF printed with pdfMake"
    };

    pdfMake.createPdf(docDefinition).open();
  }
}

angular.module("MyApp")
  .controller("MyController", MyController);
