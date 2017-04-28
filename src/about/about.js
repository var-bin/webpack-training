// about.js

"use strict";

import { welcome } from "../welcome/welcome";

if (NODE_ENV == DEV_ENV) {
  welcome("about");
  console.log(NODE_ENV);
}

$.when( $.ready ).then(function() {
  let $jqButton = $("#testJQuery");

  function testJQueryHandler(e) {
    e.preventDefault();

    let $listItems = $("ul > li");

    alert($listItems);

    console.log($listItems);
  }

  $jqButton.on("click", testJQueryHandler);
});

export { welcome };
