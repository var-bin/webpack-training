// index.ts

"use strict";

import * as _ from "lodash";
import "./styles.scss";

import { cube } from "./math";

function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", cube(5)], " ");

  return element;
}

document.body.appendChild(component());
