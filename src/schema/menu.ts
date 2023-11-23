import { randomInteger } from '../util'
import Mock from 'mockjs'
const Random = Mock.Random

const template = {
  'id|+1': 1,
  'date': Random.now('second'),
  'status|1': ['INACTIVE', 'ACTIVE', 'FINISHED']
}
import MenuItemTemplate from '../schema/menuItem'
import MenuExtraTemplate from '../schema/menuExtra'
import SalesReportRowTemplate from '../schema/salesReportRow'
import { MenuExtra, MenuItem, SalesReportRow } from '../schema/types'
export const handleMenuData = () => {
  const times = randomInteger(10)
  let data = {
    items: [] as MenuItem[],
    extras: [] as MenuExtra[],
    sales: [] as SalesReportRow[],
    ushers: [] as SalesReportRow[]
  }
  for (let ind = 0; ind < times; ind++) {
    data.items.push(Mock.mock(MenuItemTemplate))
    data.extras.push(Mock.mock(MenuExtraTemplate))
    data.sales.push(Mock.mock(SalesReportRowTemplate))
    data.ushers.push(Mock.mock(SalesReportRowTemplate))
  }
  return data
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
