const express = require('express');
const app = express();
const port = 5000;

app.get('/api/fakeData', (req, res) => {
  var authors = [
    {id: 1, first: 'Stephen', last: 'Akinyooye'},
    {id: 2, first: 'Jimmy', last: 'Sanders-Cannon'},
    {id: 8999, first: 'Yusaku', last: 'Kasahara'}
  ];
  res.json(authors)
})

app.listen(port, () => console.log(`listening on port ${port}`))