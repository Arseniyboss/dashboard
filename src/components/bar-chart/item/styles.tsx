import styled, { keyframes } from 'styled-components'
import { ThemeProps } from '@/types/theme'

type Props = ThemeProps & {
  $totalAmount: string
}

const barAnimation = keyframes<Props>`
  0% {
    height: 0;
  }
  100% {
    height: ${({ $totalAmount }) => $totalAmount};
  }
`

export const ChartItemContainer = styled.li<ThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  color: ${({ $themeStyles }) => $themeStyles.secondaryColor};
`

export const Bar = styled.div<Props>`
  height: ${({ $totalAmount }) => $totalAmount};
  background: ${({ $themeStyles }) => $themeStyles.primaryColor};
  width: 100%;
  border-radius: 0.25rem 0.25rem 0 0;
  animation: ${barAnimation} 0.3s linear;
`
