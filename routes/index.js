const Router = require('koa-router');
const { searchChannel, getInformationAboutChannel } = require('../controllers');
const koaBody = require('koa-body');

const router = new Router();

    router
        .post('/search/:channel', koaBody(), searchChannel)
        .post('/info/:id', koaBody(), getInformationAboutChannel);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
}