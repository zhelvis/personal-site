import React from 'react'
import { ThemeProvider, Styled, ColorMode } from 'theme-ui'
import Prism from '@theme-ui/prism'
import theme from './theme/index'
import { LocaleProvider } from './components/localeProvider'
import { MdxLink } from './components/mdxLink'
import { Layout } from './components/layout'

const components = {
  pre: ({ children }) => <div style={{ maxWidth: 640 }}>{children}</div>,
  code: Prism,
  a: MdxLink,
}
export const wrapRootElement = ({ element }) => (
  <ThemeProvider components={components} theme={theme}>
    <ColorMode />
    <Styled.root>{element}</Styled.root>
  </ThemeProvider>
)

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider {...props}>
    <Layout>{element}</Layout>
  </LocaleProvider>
)