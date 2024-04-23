const clsx = require("clsx");
const { reportsPage } = require("./modules/reports/page");

console.log("Reports: ", reportsPage);
console.log("App use clsx: ", clsx("foo", true && "bar", "baz"));

console.log("Main app running!");
