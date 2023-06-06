const express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express()
var db = require("./database/database.js")
const port = 5500

app.get('/messages', (req, res) => {
    db.all("SELECT * FROM messages", function(err, rows) {
        res.json({
            "message": "success",
            "data": rows
        })
    });
})

app.post('/message', jsonParser, (req, res) => {
    if (req.body.email == null || req.body.full_name == null || req.body.phone == null || req.body.message == null || req.body.message_type == null) {
        res.status(400).json({"error": "invalid request"})
        return;
    }
    
    const data = {
        message: req.body.message,
        message_type: req.body.message_type,
        email: req.body.email,
        full_name: req.body.full_name,
        phone: req.body.phone
    }

    const sql ='INSERT INTO messages (full_name, email, phone, message, message_type) VALUES (?,?,?,?,?)'
    const params =[data.full_name, data.email, data.phone, data.message, data.message_type]
    
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        
        res.json({
            "message": "success",
            "data": data,
        })
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})