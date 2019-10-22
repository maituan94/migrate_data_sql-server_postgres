"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const SQLDBContext = require("./layers/db");
const sendMessage = require("./layers/common");
sendMessage;
// import ABC = require("./ABC");
async function getData(event) {
    try {
        const dbCtxt = new SQLDBContext();
        const result = await dbCtxt.getAll();
        return sendMessage(200, result);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {
    getData
};
//# sourceMappingURL=handler.js.map