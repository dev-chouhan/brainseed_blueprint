//jshint esversion:6
const ejs = require ("ejs");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// variables
var senderName;
var senderEmail;
var subject;
var displayMessageHeading="";
var displayMessage="";
var typeOfMsg="";

// Get requests
app.get("/", function(req, res){
    res.render('home', {
        displayMessageHeading: displayMessageHeading,
        displayMessage : displayMessage,
        typeOfMsg: typeOfMsg,
    });
    displayMessageHeading="";
    displayMessage="";
    typeOfMsg="";
})

app.post("/", function(req, res){
    senderName = req.body.senderName0;
    senderEmail = req.body.senderEmail0;
    if(req.body.senderSubject0){
        senderSubject = req.body.senderSubject0;
    } else {
        senderSubject = "No Subject.";
    }
    senderMessage = req.body.senderMessage0;
    var body = "Name: " + senderName + ",      Email: " + senderEmail + ",      Subject: " + senderSubject + ",       Message: " + senderMessage;
    console.log(body);
    try{
        var transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'node-123-123-112233-321@outlook.com',
                pass: 'newPassword123'
            }
        });
        
        var mailOptions = {
            from: 'node-123-123-112233-321@outlook.com',
            to: 'brainseednetworks931@gmail.com',
            subject: subject,
            text: body,  
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.send(error);
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        displayMessageHeading = "SUCCESS";
        displayMessage = "Message sent successfully.";
        typeOfMsg = "success";
    }
    catch(error){
        displayMessageHeading = "ERROR";
        displayMessage = "Internal Server error.";
        typeOfMsg = "danger";
    }
    res.redirect("/");
})

app.get('/coremem', function(req, res){
    res.render("coreMembers");
})

app.get('/eventDetails', function(req, res){
    res.render("eventDetails");
})


// Serving listening on Port
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

app.listen(port , function () {
    console.log("Server started Successfully on port: " + port);
});