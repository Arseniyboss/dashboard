export type Card = {
  label: string
  icon: JSX.Element
  amount: string
  description: string
}

type User = {
  image: string
  name: string
  email: string
}

export type Sale = {
  user: User
  amount: string
}

export type ChartItem = {
  month: string
  totalAmount: string
}
