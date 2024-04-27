import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: var(--spacing);
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: none;
  }
`

export const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--spacing);

  @media screen and (max-width: 1100px) {
    grid-template-columns: none;
  }
`
