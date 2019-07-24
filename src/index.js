const Koa = require('koa');

let app = new Koa();

app.listen(3000, () => {
    console.log('start');
});
