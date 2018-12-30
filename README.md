TypeScript Superagent Cookies Demo
==================================

Run server and client:

```
npm install
npm run server
npm run client
```

### Log

Server side:

```
listen on http://localhost:3000
{ host: 'localhost:3000',
  'accept-encoding': 'gzip, deflate',
  'user-agent': 'node-superagent/4.1.0',
  cookie: 'a1; a2; a3',
  'non-cookie': 'a1, a2, a3',
  connection: 'close' }
```

Client side:

```
array?  true
Cookies: [ 'xxx=j%3A%5B%22x1%22%2C%22x2%22%2C%22x3%22%5D; Path=/',
  'yyy=j%3A%5B%22y1%22%2C%22y2%22%2C%22y3%22%5D; Path=/' ]
```

We can see:

1. superagent has special handling when sending `cookie`
2. `Set-Cookie` header is different from other headers
