"use strict";

// @ts-ignore
import { AuroraContext } from "/opt/db-layer";
// @ts-ignore
import * as Helper from "/opt/helper-layer";

async function getData() {
  try {
    const AuroraDB = AuroraContext.getInstance();
    const request = await AuroraDB.getRequest();
    const people = await request.query(`SELECT * FROM person`);

    return Helper.sendResponse(200, people);
  } catch (error) {
    return Helper.sendResponse(400, "No data!");
  }
}

module.exports = {
  getData
};
