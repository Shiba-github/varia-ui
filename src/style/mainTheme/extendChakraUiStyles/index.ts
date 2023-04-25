import { buttonStyle } from './Button'

// 特定のChakra ui コンポーネントを変更できる
export const extendChakraUiStyles = {
    components: {
        ...buttonStyle,
    },
}
