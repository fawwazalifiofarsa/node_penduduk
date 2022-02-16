'use strict'

const express = require("express");

const app = express()
app.use(express.json())

const db = require("./db");
db.connect(error => {
    if(error) throw error
    console.log("Mysql Connected")
})
const port = 8080;

app.get("/", (req,res) => {
    res.send({
        message: "Berhasil menjalankan GET",
        data: {
            description:
            "Endpoint ini menampilkan data"
        }
    })
})

app.use("/penduduk", require('./routes/penduduk.route'));

app.listen(port, () => {
    console.log(`Server di ${port}`);
  });