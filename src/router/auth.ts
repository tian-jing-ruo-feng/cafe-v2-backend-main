import Koa from 'koa'
import Router from 'koa-router'
import JWT from 'jsonwebtoken'
const key = '1234567890abcdefghi'
type UserInfo = {
  username: string,
  password: string
}

const router = new Router()
router.post('/auth/login', async(ctx: Koa.Context) => {
  const { username, password } = ctx.request.body as UserInfo
  let token = JWT.sign({username, password}, key)
  ctx.response.body = {
    status: 200,
    data: {
      token: token
    }
  }
})

export default router
