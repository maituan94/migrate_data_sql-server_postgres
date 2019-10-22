"use strict";
import "reflect-metadata";
import SQLDBContext = require('./layers/db');
import sendMessage = require('./layers/common').sendMessage;
// import ABC = require("./ABC");

async function getData(event) {
    try{
        const dbCtxt = new SQLDBContext();
        const result = await dbCtxt.getAll()
        return sendMessage(200,result)
    } catch (err) {
        console.log(err)
    }

}
module.exports = {
    getData
}