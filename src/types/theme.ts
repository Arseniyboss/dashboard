export type Theme = 'light' | 'dark'

export type ThemeStyles = {
  background: string
  primaryColor: string
  secondaryColor: string
  boxShadow: string
}

export type ThemeProps = {
  $themeStyles: ThemeStyles
}

export type Themes = Record<Theme, ThemeStyles>

export type ThemeContextType = {
  theme: Theme
  themeStyles: ThemeStyles
  toggleTheme: () => void
}
