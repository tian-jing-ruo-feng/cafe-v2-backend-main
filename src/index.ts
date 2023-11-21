import Koa from 'koa'
import router from './router'
import bodyParse from 'koa-bodyparser'
import cors from 'koa-cors'

const app = new Koa()
app
  .use(cors())
  .use(bodyParse())
  .use(router())
app.listen(7000)