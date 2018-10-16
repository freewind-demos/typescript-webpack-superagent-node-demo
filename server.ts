import * as express from 'express';

const app = express();

app.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}`);
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
