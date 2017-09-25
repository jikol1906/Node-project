const express = require('express');

var app = express();

var port = process.env.PORT || 3000;
    

app.use(express.static(__dirname + '/public/style'));
app.use(express.static(__dirname + '/public'));

// app.get('/',(req,res) => {
//     res.sendFile('index.html');
// })

// app.get('/student', (req,res) => {
//     res.sendFile('/public/studentInitiatives.html');
// });

// app.get('/studentInitiatives', (req,res) => {
//     res.sendFile('studentInitiatives.html');
// });



app.listen(port,() => {
    console.log('Server started on port ' + port);
})