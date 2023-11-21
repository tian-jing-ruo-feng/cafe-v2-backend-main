import Router from 'koa-router'
import combineRouters from 'koa-combine-routers'
import MenuRouter from './menu'
import AuthRouter from './auth'
const RootRouter = new Router()
RootRouter.get('/', async (ctx): Promise<void> => {
  ctx.body = 'Hello Cafe'
})

const router = combineRouters(
  RootRouter,
  AuthRouter,
  MenuRouter
)

export default router