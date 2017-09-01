// app.ts

/* require.ensure([
  "./myFirstModule/app.module",
  "./myFirstModule/app.myController",
  "./myFirstModule/styles.scss"
], (require) => {
  require("./myFirstModule/app.module");
  require("./myFirstModule/app.myController");
  require("./myFirstModule/styles.scss");
}); */

/* import "./myFirstModule/app.module";
import "./myFirstModule/app.myController";
import "./myFirstModule/styles.scss"; */

require.ensure([], () => {
  require("./myFirstModule/app.module");
  require("./myFirstModule/app.myController");
  require("./myFirstModule/styles.scss");
});
