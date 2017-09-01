import * as angular from "angular";

class MyController {
  public sayHi() {
    return "Say hi from AngularJS!";
  }

  public onClick() {
    this.sayHi();
  }
}

angular.module("MyApp")
  .controller("MyController", MyController);
