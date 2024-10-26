import { createGlobalStyle } from 'styled-components'
import { ThemeProps } from './types/theme'

const GlobalStyle = createGlobalStyle<ThemeProps>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --spacing: 1.2rem;
  }

  body {
    overscroll-behavior: none;
    font-family: Arial, Helvetica, sans-serif;
    background: ${({ $themeStyles }) => $themeStyles.background};
    color: ${({ $themeStyles }) => $themeStyles.primaryColor};
  }
  
  h2 {
    font-size: 1.3rem;
  }

  li {
    list-style-type: none;
  }

  .card {
    padding: var(--spacing);
    border-radius: 0.5rem;
    box-shadow: ${({ $themeStyles }) => $themeStyles.boxShadow};
  }
`

export default GlobalStyle
