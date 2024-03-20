// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();

// External Routers Import
const AuthenticationRouter = require("./authentication/AccountManager.js");
const FamilyManagerRouter = require("./authentication/FamilyManager.js");

// USE Router
Router.use(AuthenticationRouter);
Router.use(FamilyManagerRouter);

module.exports = Router;
