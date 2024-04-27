import styled from 'styled-components'
import { ThemeProps } from '@/types/theme'

export const ChartContainer = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const AxisContainer = styled.div`
  height: 100%;
  display: flex;
  gap: var(--spacing);
  margin-top: var(--spacing);
`

export const YAxis = styled.ul<ThemeProps>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  color: ${({ $themeStyles }) => $themeStyles.secondaryColor};
`

export const XAxis = styled.ul`
  display: flex;
  gap: 0.7rem;
  width: 100%;
`
