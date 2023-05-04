import { useAppDispatch, useAppSelector } from '@/hooks'
import { fontSizeSliceActions } from '@/redux/fontSize/fontSizeSlice'

export const useFontSizeOnOffButtonHook = () => {
    const titleText = useAppSelector((state) => state.fontSizeReducer.titile)
    const fontSizeIconPath = useAppSelector((state) => state.fontSizeReducer.iconPath)
    const isDisplay = useAppSelector((state) => state.fontSizeReducer.isDisplayOn)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(fontSizeSliceActions.setIsDisplayOn(!isDisplay))
    }
    return {
        titleText,
        fontSizeIconPath,
        isDisplay,
        onClickHandler,
    }
}
