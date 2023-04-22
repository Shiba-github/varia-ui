import { CSSObject } from '@emotion/react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type typeCSSObject = {
    cssObject: CSSObject
}
const mergeCSS = (cssObject:typeCSSObject) => {

}

const getCSSObject = () => {

}

const initCSSObject = () => {
    const tmpCSSObject:CSSObject = {}
}

const getCSS = () => {
    return {
    color: useAppSelector((state) => {state.colorReducer.color}),
    fontSize: useAppSelector((state) => {state.fontSizeReducer.fontSize})
    }
}