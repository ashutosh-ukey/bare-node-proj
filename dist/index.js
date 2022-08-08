"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aSecret = exports.pingPackage = void 0;
function pingPackage(msg) {
    if (msg) {
        console.log("You message is safe with me.");
        if (msg.includes("starfoosh"))
            console.log(";)");
    }
    else
        console.log("Hello world (from inside Ashu's npm account)!");
}
exports.pingPackage = pingPackage;
exports.aSecret = "I like bubblegum";
