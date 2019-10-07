const express = require('express');
const axios = require('axios');
const fs = require('fs');
const {promisify} = require('util');

const app = express();
app.use(express.json());

const readFileAsync = promisify(fs.readFile);

let check = req => {
  console.log(`hostname: ${req.hostname}, ip: ${req.ip}, method: ${req.method}`);
}

app.get('/check', (req, res) => {
  check(req);
  res.end()
});

// Public apis in https://github.com/public-apis/public-apis
app.get('/btcusd', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => {;
    res.send(response.data.bpi.USD);
  })
  .catch(error => {
    console.log(error)
    res.status(500)
    res.send('oops');
  })
    
});

app.get('/btcgbp', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => {;
    res.send(response.data.bpi.GBP);
  })
  .catch(error => {
    console.log(error)
    res.status(500)
    res.send('oops');
  })
    
});

app.get('/btceur', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => {;
    res.send(response.data.bpi.EUR);
  })
  .catch(error => {
    console.log(error)
    res.status(500)
    res.send('oops');
  })
    
});

app.get('/fonsecapi', (req, res) => {
  readFileAsync('simples.json')
  .then(file => {
    res.send(JSON.stringify(JSON.parse(file)));
  })
  .catch(err => {
    console.log(err)
    res.status(500)
    res.send()
  })
});

app.get('/fonsecapi/:estrofaId', (req, res) => {
  readFileAsync('simples.json')
  .then(file => {
    res.send(JSON.stringify(JSON.parse(file)[req.params.estrofaId]));
  })
  .catch(res.send)
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
  axios.get('http://itba-check.duckdns.com/check')
  .then(() => {})
  .catch(() => {})
  console.log(`Serving running at http://${hostname}:${port}/`);
});