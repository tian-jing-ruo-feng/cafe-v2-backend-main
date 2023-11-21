import Router from 'koa-router'
import combineRouters from 'koa-combine-routers'
import MenuRouter from './menu'
const RootRouter = new Router()
RootRouter.get('/', async (ctx): Promise<void> => {
  ctx.body = 'Hello Cafe'
})

const router = combineRouters(
  RootRouter,
  MenuRouter
)

export default router