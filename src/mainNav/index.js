// mainNav/index.js

"use strict";

import "./mainNavStyles.css";
import template from "./mainNav.pug";

class mainNav {
  constructor(options) {
    this.elem = document.createElement("header");

    this.elem.innerHTML = template(options);
  }
}

export { mainNav };
