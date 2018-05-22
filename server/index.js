const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const tc = require(`./tasks_controllers.js`)

// ENDPOINTS

app.get('https://tehuano-time-zone-v1.p.mashape.com/api2/timezone/48.853/2.35', tc.time);
app.get('https://andruxnet-random-famous-quotes.p.mashape.com/', tc.read);
app.get('/api/addTask/', tc.read);
app.post('/api/addTask/', tc.create);
app.put('/api/editTask/:id', tc.update);
app.delete('/api/removeTask/:id', tc.delete);

const PORT = 3005
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
});