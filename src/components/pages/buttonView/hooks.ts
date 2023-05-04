import { useAppSelector } from '@/hooks'

const getCSS = () => {
    return {
        color: useAppSelector((state) => state.colorReducer.color),
        fontSize: useAppSelector((state) => state.fontSizeReducer.fontSize),
    }
}

export const useCssStylesHooks = () => {
    const CSSStyles = { ...getCSS() }
    let allCssStyles = {}
    Object.values(CSSStyles).forEach((value) => {
        allCssStyles = { ...allCssStyles, ...value }
    })
    return { ...allCssStyles }
}
