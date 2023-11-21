import Koa from 'koa'
import Router from 'koa-router'
import MenusMockData from '../schema/menu'

const router = new Router();

router.get('/menus', async (ctx: Koa.Context): Promise<void> => {
  ctx.body = MenusMockData
})

export default router