import { randomInteger } from '../util'
import Mock from 'mockjs'
const Random = Mock.Random

const template = {
  'id|+1': 1,
  'date': Random.now('second'),
  'status|1': ['INACTIVE', 'ACTIVE', 'FINISHED']
}

const generateMenus = () => {
  const times = randomInteger(10)
  const records = []
  for (let ind = 0; ind < times; ind++) {
    records.push(Mock.mock(template))
  }
  return records
}

export default generateMenus()
