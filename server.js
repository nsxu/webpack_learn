const express = require("express")
const app = express()
app.use(express.static("dist", {maxAge:1000}))
app.listen(10001, ()=> console.log('10001'))