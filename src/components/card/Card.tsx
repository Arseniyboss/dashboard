import { useTheme } from '@/hooks/useTheme'
import { Card as Props } from '@/types/data'
import { CardHeader, CardAmount, CardDescription } from './styles'

const Card = ({ label, icon, amount, description }: Props) => {
  const { themeStyles } = useTheme()
  return (
    <article className='card'>
      <CardHeader>
        <h2>{label}</h2>
        <span>{icon}</span>
      </CardHeader>
      <CardAmount>{amount}</CardAmount>
      <CardDescription $themeStyles={themeStyles}>
        {description}
      </CardDescription>
    </article>
  )
}

export default Card
