const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const { routes, allowedMethods } = require('./routes');
port = process.env.PORT || 3000;

app.use(logger());
app.use(routes());
app.use(allowedMethods());


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});