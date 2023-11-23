import Mock from 'mockjs'
const Random = Mock.Random

const template = {
  'name': Random.word(5, 10),
  'price|20-100': 50,
  'stock|1-10': 5,
  'id': Random.guid(),
  'sold|15-30': 15,  
  'subtotal|1-100': 30
}

export default template