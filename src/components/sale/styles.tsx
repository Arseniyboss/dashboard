import styled from 'styled-components'
import { ThemeProps } from '@/types/theme'

export const SaleContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing);

  @media screen and (max-width: 430px) {
    flex-direction: column;
    align-items: initial;
  }
`

export const SaleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const UserImage = styled.img`
  --size: 45px;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
`

export const UserDetails = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  p:last-of-type {
    color: ${({ $themeStyles }) => $themeStyles.secondaryColor};
  }
`
