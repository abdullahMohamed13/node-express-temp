const express = require('express');
const app = express()
const port = 5000

app.get("/", (request, response) => {
	response.send('Hello Abdallah')
})

app.get('/about', (req, res) => {
	res.send("About")
})

app.listen(port, () => {
	global.console.log(`DONE ✅ ${port}`)
})
