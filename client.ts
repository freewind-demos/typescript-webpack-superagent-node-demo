import * as superagent from 'superagent';

superagent.get('http://localhost:3000')
    .set('Cookie', ['a1', 'a2', 'a3'] as any)
    .set('Non-Cookie', ['a1', 'a2', 'a3'] as any)
    .send()
    .end((err, res) => {
      const cookies = res.get('Set-Cookie');
      console.log("array? ", Array.isArray(cookies));
      console.log('Cookies:', cookies);
    });
