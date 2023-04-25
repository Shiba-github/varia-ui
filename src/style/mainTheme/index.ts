import { extendTheme } from '@chakra-ui/react'
import { extendCssStyles } from './extendCssStyles'
import { globalTheme } from './extendHtmlStyles'
import { extendChakraUiStyles } from './extendChakraUiStyles'

export const mainTheme = extendTheme({
    styles: globalTheme,
    ...extendCssStyles,
    ...extendChakraUiStyles,
})
