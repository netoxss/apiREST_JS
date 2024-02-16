const express = require("express");
const app = express();
const data = require('./data.json');
app.use(express.json());

app.get("/client", function(req, res){
    res.json(data);
});

app.get("/client/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(404).json();
    
    else res.json(client);
    // }
})

app.listen(3000, function() {
    console.log('Server is running!');
});