// index.ts

"use strict";

import * as angular from "angular";

import fooString from "./foo";
import bar from "./bar";
import "./styles/normalize.css";
import "./styles/styles.css";
import "./styles/styles-v1.css";
import "angularjs-color-picker";
import "ui-select";

angular.module("app", ["color.picker"]);

console.log(fooString, bar);
