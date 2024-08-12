const express = require('express');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

const PORT = process.env.PORT || 3000;

// Basic GET request
app.get('/status', (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

// Basic POST request
app.post('/data', (request, response) => {
    const receivedData = request.body; // Access the JSON data sent in the request body
    const reply = {
        message: "Data received successfully",
        received: receivedData
    };
    response.send(reply);
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
