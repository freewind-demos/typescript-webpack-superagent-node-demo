import superagent from 'superagent';

async function run() {
  const response = await superagent.get('https://github.com/');
  console.log(response)
  const data = response.text;
  console.log(data);
}

run();
