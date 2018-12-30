import * as superagent from 'superagent';

superagent.get('http://localhost:3000')
    .set('cookie', ['a1', 'a2', 'a3'] as any)
    .set('non-cookie', ['a1', 'a2', 'a3'] as any)
    .send()
    .end((err, res) => {
      const cookies = res.get('Set-Cookie');
      console.log('Cookies:', cookies);
    });
