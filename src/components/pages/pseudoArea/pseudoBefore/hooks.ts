import { useAppDispatch, useAppSelector } from '@/hooks'
import { pseudoSliceActions } from '@/redux/pseudo/pseudoSlice'
import { beforeSliceActions } from '@/redux/pseudoElement/before/beforeSlice'
import { useEffect } from 'react'

export const usePseudoBeforeHook = () => {
    const titleText = useAppSelector((state) => state.beforeReducer.titile)
    const fontSizeIconPath = useAppSelector((state) => state.beforeReducer.iconPath)
    const isDisplay = useAppSelector((state) => state.beforeReducer.isDisplayOn)
    const cssTitle = useAppSelector((state) => state.beforeReducer.cssTitle)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(beforeSliceActions.setIsDisplayOn(!isDisplay))
    }
    useEffect(() => {
        if (isDisplay) {
            dispatch(pseudoSliceActions.setPseudo(cssTitle))
            return
        }
        dispatch(pseudoSliceActions.removePseudo(cssTitle))
    }, [isDisplay])
    return {
        titleText,
        fontSizeIconPath,
        isDisplay,
        onClickHandler,
    }
}
