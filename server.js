const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

const decathlonEvents = {
    "decathlon":{
        "name": "Decathlon",
        "eventNumber": 0,
        "decathlonWorldRecordHolder": "Kevin Mayer",
        "decathlonWorldRecord": "9126 points"
    },
    "100MeterDash":{
        "name": "100 Meter Dash",
        "eventNumber": 1,
        "decathlonWorldRecordHolder": "Damian Warner",
        "decathlonWorldRecord": "10.12 seconds"
    },
    "longJump":{
        "name": "Long Jump",
        "eventNumber": 2,
        "decathlonWorldRecordHolder": "Simon Ehammer",
        "decathlonWorldRecord": "8.45 meters or 27 feet 8.5 inches"
    },
    "shotPut":{
        "name": "Shot Put",
        "eventNumber": 3,
        "decathlonWorldRecordHolder": "Edy Hubacher",
        "decathlonWorldRecord": "19.17 meters or 62 feet 10.5 inches"
    },
    "highJump":{
        "name": "High Jump",
        "eventNumber": 4,
        "decathlonWorldRecordHolder": "Derek Drouin",
        "decathlonWorldRecord": "2.28 meters or 7 feet 5.75 inches"
    },
    "400MeterDash":{
        "name": "400 Meter Dash",
        "eventNumber": 5,
        "decathlonWorldRecordHolder": "Ashton Eaton",
        "decathlonWorldRecord": "45.00 seconds"
    },
    "110MeterHurdles":{
        "name": "110 Meter Hurdles",
        "eventNumber": 6,
        "decathlonWorldRecordHolder": "Damian Warner",
        "decathlonWorldRecord": "13.36 seconds"
    },
    "discus":{
        "name": "Discus",
        "eventNumber": 7,
        "decathlonWorldRecordHolder": "Bryan Clay",
        "decathlonWorldRecord": "55.87 meters or 183 feet 3.5 inches"
    },
    "poleVault":{
        "name": "Pole Vault",
        "eventNumber": 8,
        "decathlonWorldRecordHolder": "Tim Lobinger",
        "decathlonWorldRecord": "5.76 meters or 18 feet 8.25 inches"
    },
    "javelin":{
        "name": "Javelin",
        "eventNumber": 9,
        "decathlonWorldRecordHolder": "Peter Blank",
        "decathlonWorldRecord": "79.80 meters or 261 feet 9.5 inches"
    },
    "1500MeterRun":{
        "name": "1,500 Meter Run",
        "eventNumber": 10,
        "decathlonWorldRecordHolder": "Robert Baker",
        "decathlonWorldRecord": "03.58.70"
    },
    "unknown":{
        "name": "unknown",
        "eventNumber": "unknown",
        "decathlonWorldRecordHolder": "unknown",
        "decathlonWorldRecord": "unknown"
    }
}

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/api/:decathlonEvents", (req,res)=>{
    let decathlonEventName = req.params.decathlonEvents.trim().toLowerCase().split(" ").join("");

    let lowerCaseEvents = {};
    Object.keys(decathlonEvents).map((event)=>{
        lowerCaseEvents[event.toLowerCase()] = decathlonEvents[event];
    })

    if(lowerCaseEvents[decathlonEventName]){
        res.json(lowerCaseEvents[decathlonEventName])
    }else{
        res.json(decathlonEvents["unknown"])
    }
})

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})