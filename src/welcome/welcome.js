// welcome.js

"use strict";

function welcome(message) {
  if (NODE_ENV == DEV_ENV) {
    debugger;
  }
  console.log(`Welcome ${message}`);

  alert(`Welcome ${message}`);
}

export { welcome };
