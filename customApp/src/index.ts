// index.ts

"use strict";

import { join } from "lodash";
import "./styles.scss";

import { cube } from "./math";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = join(["Hello", "webpack", cube(5)], " ");

  return element;
}

document.body.appendChild(component());
