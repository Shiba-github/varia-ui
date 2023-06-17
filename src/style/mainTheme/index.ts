import { extendTheme } from '@chakra-ui/react'
import { extendCssStyles } from './extendCssStyles'
import { globalTheme } from './extendHtmlStyles'
import { extendChakraUiStyles } from './extendChakraUiStyles'

export const mainTheme = extendTheme({
    styles: globalTheme,
    ...extendCssStyles,
    ...extendChakraUiStyles,
    colors: {
        primary: {
            100: '#E2E8F0',
            200: '#CAD0D8',
            300: '#718096',
            400: '#2F3A51',
            500: '#27272A',
            600: '#1a202c',
        }
    }
})
