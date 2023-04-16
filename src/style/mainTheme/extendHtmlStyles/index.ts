import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { body } from './body'
import { h1 } from './h1'

// 特定のhtml要素に対してスタイルをつけることができる
export const globalTheme = (props: StyleFunctionProps) => ({
    body:body,
    h1:h1
})