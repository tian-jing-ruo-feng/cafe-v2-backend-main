import Mock from 'mockjs'
const Random = Mock.Random

const template = {
  'name': Random.first(),
  'price|20-100': 50,
  'stock|1-10': 5,
  'menuId|+1': 1,
  'id|+1': 111,
  'quantity|15-30': 15,
  'subtotal|1-100': 30
}

export default template