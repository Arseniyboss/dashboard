import { useTheme } from './hooks/useTheme'
import { Container, Header, CardSection, MainSection } from './styles'
import GlobalStyle from './GlobalStyle'
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher'
import Card from './components/card/Card'
import BarChart from './components/bar-chart/BarChart'
import SalesCard from './components/sales-card/SalesCard'
import cardData from './data/cardData'

const App = () => {
  const { themeStyles } = useTheme()
  return (
    <>
      <GlobalStyle $themeStyles={themeStyles} />
      <Container>
        <Header>
          <h1>Dashboard</h1>
          <ThemeSwitcher />
        </Header>
        <CardSection>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </CardSection>
        <MainSection>
          <BarChart />
          <SalesCard />
        </MainSection>
      </Container>
    </>
  )
}

export default App
