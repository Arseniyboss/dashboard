import { LuDollarSign, LuUsers, LuCreditCard, LuActivity } from 'react-icons/lu'
import { Card } from '@/types/data'

const cardData: Card[] = [
  {
    label: 'Total Revenue',
    icon: <LuDollarSign />,
    amount: '$45,231.89',
    description: '+20.1% from last month',
  },
  {
    label: 'Subscriptions',
    icon: <LuUsers />,
    amount: '+2350',
    description: '+180.1% from last month',
  },
  {
    label: 'Sales',
    icon: <LuCreditCard />,
    amount: '+12,234',
    description: '+19% from last month',
  },
  {
    label: 'Active Now',
    icon: <LuActivity />,
    amount: '+573',
    description: '+201 since last hour',
  },
]

export default cardData
