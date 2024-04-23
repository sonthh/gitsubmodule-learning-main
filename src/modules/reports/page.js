const { component1, component2 } = require("../../shared/components");
const { useHook1, useHook2 } = require("../../shared/hooks");

const reportsPage = {
  name: "reports",
  components: [component1, component2],
  hooks: [useHook1, useHook2],
};

module.exports = {
  reportsPage,
};
