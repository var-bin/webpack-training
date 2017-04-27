// loadVendors

"use strict";

function loadVendors() {
  let loadMomentJsButton = document.getElementById("loadMomentJS");
  let loadLodashButton = document.getElementById("loadLodash");

  function loadMomentJsHandler(e) {
    e.preventDefault();

    require.ensure(["moment"], (require) => {
      let momentjs = require("moment");

      alert(momentjs().format('LLLL'));
      console.log(momentjs().format('LLLL'));
    }, "vendors")
  }

  function loadLodashHandler(e) {
    e.preventDefault();

    let pdf = require("bundle!pdfmake.min.js");
    let vfsFonts = require("bundle!vfs_fonts.js");

    require.ensure(["lodash"], (require) => {
      let _ = require("lodash");

      alert(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
      console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
    }, "vendors")
  }

  loadMomentJsButton.addEventListener("click", loadMomentJsHandler, false);
  loadLodashButton.addEventListener("click", loadLodashHandler, false);
}

export { loadVendors };
