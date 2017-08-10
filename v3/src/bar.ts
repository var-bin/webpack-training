// bar.ts

"use strict";

export default "bar";
import * as angular from "angular";
import "angularjs-color-picker";

angular.module("app", ["color.picker"]);
