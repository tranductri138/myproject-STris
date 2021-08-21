import express from "express";

let configViewEngine = (app) => {
    // arrow func
    app.use(express.static("./src/public"))
    app.set("view engine", "ejs"); // jsp nhu ben javaweb 
    app.set("views","./src/views"); // cấu hình view engine 
    
}

module.exports = configViewEngine;