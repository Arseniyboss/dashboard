import styled from 'styled-components'
import { ThemeProps } from '@/types/theme'

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
  }
`

export const CardAmount = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`

export const CardDescription = styled.p<ThemeProps>`
  margin-top: 0.3rem;
  color: ${({ $themeStyles }) => $themeStyles.secondaryColor};
`
