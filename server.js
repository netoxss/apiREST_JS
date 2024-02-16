const express = require("express");
const app = express();
const data = require('./data.json');
app.use(express.json());

app.get("/client", function(req, res){
    res.json(data);
});

app.get("/client/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(404).json();
    
    else res.json(client);
});

app.post("/client", function(req, res){
    const {id, name, email} = req.body;
    res.json({id, name, email})

});

app.put("/client/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => client.id = id)

    const {name, email} = req.body;

    if(!client) return res.status(204);

    else 
    client.name = name, client.email = email; 
    res.json(client);

    

});

app.listen(3000, function() {
    console.log('Server is running!');
});