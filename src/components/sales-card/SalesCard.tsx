import { useTheme } from '@/hooks/useTheme'
import { SalesHeader, SaleWrapper } from './styles'
import Sale from '@/components/sale/Sale'
import sales from '@/data/sales'

const SalesCard = () => {
  const { themeStyles } = useTheme()
  return (
    <div className='card'>
      <SalesHeader $themeStyles={themeStyles}>
        <h2>Recent Sales</h2>
        <p>You made 265 sales this month.</p>
      </SalesHeader>
      <SaleWrapper>
        {sales.map((sale, index) => (
          <Sale key={index} {...sale} />
        ))}
      </SaleWrapper>
    </div>
  )
}

export default SalesCard
