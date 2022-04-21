const express = require('express') // Import the express dependency
const app = express() // Instantiate an express app, the main work horse of this server
const PORT = process.env.PORT || 5000

// Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => { // get requests to the root ("/") will route here
  res.sendFile('hello.html', { root: __dirname })
  console.log('Website accessed') // server responds by sending the index.html file to the client's browser                                                 //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
})

app.listen(PORT, () => { // server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${PORT}`)
})
