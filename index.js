require('dotenv').config(); 
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", cors() ,async (req, res) => {
    res.send("This is working")
});       


app.post("/" ,async (req, res) => {
    const query = req.body.city;
    const apiKey = process.env.API_KEY;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function (response) {

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const feelsLike = weatherData.main.feels_like;
            const weatherIcon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

            console.log(temp);
            console.log(feelsLike);

            const details = [query, temp, iconURL];
            res.send(details);
        });
    
    });
});

app.listen(5000, () => {
  console.log("Server started on port 5000.");
});