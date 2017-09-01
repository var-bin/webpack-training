import * as angular from "angular";

class MyController {
  public sayHi() {
    return "Say hi from AngularJS!";
  }
}

angular.module("MyApp")
  .controller("MyController", MyController);
