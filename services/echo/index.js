`use strict`

const Koa =  require('koa')
const App = new Koa()
const Port = process.env.SERVICE_PORT || 8080

App.use(async (ctx, next) => {
    ctx.header.accept = 'application/json'
    console.log(`--> ${ctx.request.path}`)
    await next()
    console.log(`<-- ${ctx.request.path} ${ctx.status || 200 }`)
})

App.use(async (ctx, next) => {
    ctx.response.body = {
        path: ctx.request.path || null,
        query: ctx.request.query || null,
        body: ctx.request.body || null,
    }
})

console.log(`service [echo] running on port [${Port}]`)
App.listen(Port)