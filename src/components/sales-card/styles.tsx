import styled from 'styled-components'
import { ThemeProps } from '@/types/theme'

export const SalesHeader = styled.header<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: var(--spacing);

  p {
    color: ${({ $themeStyles }) => $themeStyles.secondaryColor};
  }
`

export const SaleWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
`
