"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editorModel = void 0;
var database_1 = require("./database");
var editorSchema = new database_1.database.Schema({
    code: String,
});
exports.editorModel = database_1.database.model("editor", editorSchema);
