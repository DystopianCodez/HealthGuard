// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();

// Account Creation Handler
Router.post("/create-account", (req, res, next) => {
  let requestBody = req.body;
  const UserObject = {
    firstName: requestBody.firstName,
    middleName: requestBody.middleName,
    lastName: requestBody.lastName,
    UniqueToken: {
      ProfileToken: "boolean",
      AuthenticationToken: "boolean",
    },
    location: [
      {
        allowedLocation: Boolean,
        latitude: String,
        longitude: String,
      },
    ],
  };
  console.log(requestBody);
});

module.exports = Router;
