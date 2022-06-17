import Koa from 'koa';
import serve from 'koa-static';
import send from 'koa-send';

const port = 3000;
const root = `${process.cwd()}/public`;
const src = `${process.cwd()}/src`;

const app = new Koa();

app.use(serve(root));
app.use(serve(src));

app.use(async ctx => {
  await send(ctx, 'public/index.html');
});

app.listen(port);

console.log(`-------------------------`);
console.log(`Listening at http://localhost:${port}/`);
console.log(`-------------------------`);
