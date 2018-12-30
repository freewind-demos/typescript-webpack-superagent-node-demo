import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log(req.headers);
  res.cookie('xxx', ['x1', 'x2', 'x3']);
  res.cookie('yyy', ['y1', 'y2', 'y3']);
  res.send(`Hello`);
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
