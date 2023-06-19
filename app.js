require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
 // Load environment variables from .env file
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname,
                },
            },
        ],
    };

    const jsonData = JSON.stringify(data);

    const url = process.env.URL;
    const options = {
        method: "POST",
        auth:process.env.API_KEY ,
    };

    const mailchimpRequest = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    mailchimpRequest.write(jsonData);
    mailchimpRequest.end();
});

app.post("/failure", function (req, res) {
    res.redirect("/");
  });
  
  app.post("/getinfo", function (req, res) {
    res.send("/getinfo");
  });
  
  app.post("/success", function (req, res) {
    // Implement the logic for handling the "/success" POST request here
    res.sendFile(__dirname + "/getifo.html");
  });

app.listen(3000, function () {
    console.log("The server is currently running on port 3000");
});
