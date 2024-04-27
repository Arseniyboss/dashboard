import { useTheme } from '@/hooks/useTheme'
import { Sale as Props } from '@/types/data'
import { SaleContainer, SaleGroup, UserImage, UserDetails } from './styles'

const Sale = ({ user, amount }: Props) => {
  const { themeStyles } = useTheme()
  return (
    <SaleContainer>
      <SaleGroup>
        <UserImage src={user.image} alt='' />
        <UserDetails $themeStyles={themeStyles}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </UserDetails>
      </SaleGroup>
      <p>{amount}</p>
    </SaleContainer>
  )
}

export default Sale
