'use strict';

const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyParser');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.use(bodyParser());

router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
      <p>Name: <input name="name" value="koa"></p>
      <p>Passowrd: <input name="password" type="password"></p>
      <p><input type="submit" value="submit"></p>
    </form>`;
});

router.post('/signin', async (ctx, next) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  }
  else {
    ctx.response.body = `<h1>Login faild!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000');
