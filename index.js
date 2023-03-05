'use strict';

const express = require('express')

const port = 8000;

const axios = require("axios");


// APP

const bodyParser = require('body-parser')
 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 

app.get('/', (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
        params: {
          url: 'https://youtu.be/CocEMWdc7Ck',
          format: 'mp3',
          responseFormat: 'json',
          lang: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '283ad9f926msh1b52f18764a1427p113d65jsn6372c497a931',
          'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.send(response.data)
      }).catch(function (error) {
        res.send(error)
      });
})

app.post('/speak', (req, res) => {
    // let data = req.body;
    // res.send('Data Received: ' + JSON.stringify(data));
    const options = {
        method: 'POST',
        url: 'https://joj-text-to-speech.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '283ad9f926msh1b52f18764a1427p113d65jsn6372c497a931',
          'X-RapidAPI-Host': 'joj-text-to-speech.p.rapidapi.com'
        },
        data: '{"input":{"text":"Mary and Samantha arrived at the bus station early but waited until noon for the bus."},"voice":{"languageCode":"en-US","name":"en-US-News-L","ssmlGender":"FEMALE"},"audioConfig":{"audioEncoding":"MP3"}}'
      };
      
      axios.request(options).then(function (response) {
        res.send(response.data)
      }).catch(function (error) {
        res.send(error)
      });
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})