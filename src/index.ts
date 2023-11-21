import Koa from 'koa'
import router from './router'

const app = new Koa()
app.use(router())
app.listen(7000)