function sendMessage() {
    const message = document.getElementById('message').value;
    
    // Make sure the message is not empty
    if (!message) {
        alert('Please enter a message.');
        return;
    }

    // Create an object to hold the message data
    const messageData = {
        message: message
    };

    // Send the message data to the server (assuming a server endpoint is set up)
    fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}

function linkDocument() {
    const documentURL = 'KumarResume.pdf'; // Path to your document
    window.location.href = documentURL;
}



// Install express by running: npm install express

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-message', (req, res) => {
    const message = req.body.message;
    console.log('Received message:', message);
    res.json({ status: 'Message received', message: message });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});



function sendEmail() {
    window.location.href = "mailto:shreekumar582002@gmail.com?subject=Subject&body=Message%20body";
}

