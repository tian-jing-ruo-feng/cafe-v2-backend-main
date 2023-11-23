import Koa from 'koa'
import Router from 'koa-router'
import MenusMockData, { handleMenuData } from '../schema/menu'

const router = new Router();

router.get('/menus', async (ctx: Koa.Context): Promise<void> => {
  const { field, value } = ctx.query
  if (!field) {
    ctx.body = MenusMockData
  } else {
    let data = MenusMockData.filter(item => item[`${field}`] === value)
    ctx.body = {
      status: 200,
      data
    }
  }
})

router.get('/menus/:menuId/complete', async (ctx: Koa.Context): Promise<void> => {
  ctx.body = {
    status: 200,
    menuData: handleMenuData()
  }
})
export default router