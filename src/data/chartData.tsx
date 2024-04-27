import { ChartItem } from '@/types/data'
import { generateTotalAmount } from '@/utils'

const chartData: ChartItem[] = [
  { month: 'Jan', totalAmount: generateTotalAmount() },
  { month: 'Feb', totalAmount: generateTotalAmount() },
  { month: 'Mar', totalAmount: generateTotalAmount() },
  { month: 'Apr', totalAmount: generateTotalAmount() },
  { month: 'May', totalAmount: generateTotalAmount() },
  { month: 'Jun', totalAmount: generateTotalAmount() },
  { month: 'Jul', totalAmount: generateTotalAmount() },
  { month: 'Aug', totalAmount: generateTotalAmount() },
  { month: 'Sep', totalAmount: generateTotalAmount() },
  { month: 'Oct', totalAmount: generateTotalAmount() },
  { month: 'Nov', totalAmount: generateTotalAmount() },
  { month: 'Dec', totalAmount: generateTotalAmount() },
]

export default chartData
