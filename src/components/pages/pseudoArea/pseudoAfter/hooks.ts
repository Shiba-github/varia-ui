import { useAppDispatch, useAppSelector } from '@/hooks'
import { pseudoSliceActions } from '@/redux/pseudo/pseudoSlice'
import { afterSliceActions } from '@/redux/pseudoElement/after/afterSlice'
import { useEffect } from 'react'

export const usePseudoAfterHook = () => {
    const titleText = useAppSelector((state) => state.afterReducer.titile)
    const fontSizeIconPath = useAppSelector((state) => state.afterReducer.iconPath)
    const isDisplay = useAppSelector((state) => state.afterReducer.isDisplayOn)
    const cssTitle = useAppSelector((state) => state.afterReducer.cssTitle)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(afterSliceActions.setIsDisplayOn(!isDisplay))
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
