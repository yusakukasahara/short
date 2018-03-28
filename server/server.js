const express = require('express');
const app = express();
const port = 5000;

var authors = [
  {id: 9001, first: 'Stephen', last: 'Akinyooye'},
  {id: 9002, first: 'Jimmy', last: 'Sanders-Cannon'},
  {id: 8999, first: 'Yusaku', last: 'Kasahara'}
];

app.get('/api/fakeData', (req, res) => {
  res.send(authors)
})


app.listen(port, () => console.log(`listening on port ${port}`))