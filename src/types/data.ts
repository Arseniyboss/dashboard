import { ReactElement } from 'react'

export type Card = {
  label: string
  icon: ReactElement
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
