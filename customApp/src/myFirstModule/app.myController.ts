import * as angular from "angular";
const moment = require("moment") as any;

class MyController {
  public sayHi() {
    const now = moment().format("LLLL");

    return `Say hi from AngularJS! ${now}`;
  }

  public onClick() {
    this.sayHi();
  }
}

angular.module("MyApp")
  .controller("MyController", MyController);
