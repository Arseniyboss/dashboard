import { useTheme } from '@/hooks/useTheme'
import { ChartContainer, AxisContainer, YAxis, XAxis } from './styles'
import ChartItem from './item/ChartItem'
import chartData from '@/data/chartData'

const BarChart = () => {
  const { themeStyles } = useTheme()
  return (
    <ChartContainer className='card'>
      <h2>Overview</h2>
      <AxisContainer>
        <YAxis $themeStyles={themeStyles}>
          {[...new Array(5)].map((_, index) => (
            <li key={index}>${index * 1500}</li>
          ))}
        </YAxis>
        <XAxis>
          {chartData.map((item, index) => (
            <ChartItem key={index} {...item} />
          ))}
        </XAxis>
      </AxisContainer>
    </ChartContainer>
  )
}

export default BarChart
