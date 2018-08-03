var express = require('express');
var path    = require('path');
const app = express()


app.use(express.static('public'));


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname+'/index.html'));
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})