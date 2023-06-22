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
            100: '#EBF8FF',
            200: '#BEE3F9',
            300: '#91E5F6',
            400: '#84D2F6',
            500: '#59A5D9',
            600: '#398AD7',
            700: '#386FA4',
            800: '#133c55',
        },
        secondary: {
            100: '#E2E8F0',
            200: '#CAD0D8',
            300: '#718096',
            400: '#2F3A51',
            500: '#27272A',
            600: '#1a202c',
        }
    }
})
