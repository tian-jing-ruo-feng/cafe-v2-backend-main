import Mock from 'mockjs'
import { getuid } from 'process'
const Random = Mock.Random

const template = {
  'description': Random.csentence(),
  'amount|1-10': 5,
  'type|1': ['GASTO', 'INGRESO'],
  'menuId|+1': 1,
  'id': Random.guid(),
}

export default template