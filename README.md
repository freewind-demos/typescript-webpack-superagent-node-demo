TypeScript Express Demo
=======================

Write express code in typescript.

```
npm install
npm run demo
```

Then visit <http://localhost:3000/typescript>, you will see `Hello, typescript`.

My question is:

I've already set:

```
"noImplicitAny": true,
```

in `tsconfig.json`, but in the `server.ts`, I didn't specify the type for `req` and `res`,
but typescript doesn't report any errors:

```
app.get('/:name', (req, res) => {
   ...
})
```

Why?
