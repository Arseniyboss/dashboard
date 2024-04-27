import { useTheme } from '@/hooks/useTheme'
import { ChartItem as Props } from '@/types/data'
import { ChartItemContainer, Bar } from './styles'

const ChartItem = ({ totalAmount, month }: Props) => {
  const { themeStyles } = useTheme()
  return (
    <ChartItemContainer $themeStyles={themeStyles}>
      <Bar $themeStyles={themeStyles} $totalAmount={totalAmount} />
      <p>{month}</p>
    </ChartItemContainer>
  )
}

export default ChartItem
