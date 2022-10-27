
const http = require('http');

// App Object - Module Scaffolding 
const app = {};

// Configaration 
app.config = {
    port: 5000,
}


// Create Server 

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Server is running at port ${app.config.port}`);
    })
}


// Handle Request and Response 

app.handleReqRes = (req, res) => {
    res.end('hello world');
}


// Start the Server 
app.createServer();