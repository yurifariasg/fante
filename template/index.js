const Handlebars = require("handlebars");
const fs = require("fs");

const { getFormattedDate } = require("../utils");

const templateFor = async (learningItems) => {
  const templateContent = fs
    .readFileSync("./template/template.html")
    .toString("utf8");
  const template = Handlebars.compile(templateContent);
  return template({ learningItems, formattedDate: getFormattedDate() });
};

module.exports = { templateFor };
