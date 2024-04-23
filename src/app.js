const clsx = require("clsx");
require("dotenv").config();

const { reportsPage } = require("./modules/reports/page");

console.log("Reports: ", reportsPage);
console.log("App use clsx: ", clsx("foo", true && "bar", "baz"));
console.log("App use .enn auth=" + process.env.AUTHOR);

console.log("Main app running!");
