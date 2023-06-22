import { useAppSelector } from '@/hooks'
import { fontSizeSliceActions } from '@/redux/fontSize/fontSizeSlice'
import { convertPxtoNumber } from '@/utils/convertPxToNumber'
import { useDispatch } from 'react-redux'

export const useFontSizeHook = () => {
    const dispatch = useDispatch()
    const fontSize = useAppSelector((state) => state.fontSizeReducer.fontSize)
    const handler = (v: number) => {
        const result = {
            fontSize: v.toString() + 'px',
        }
        dispatch(fontSizeSliceActions.mergeCss(result))
    }
    const numValue = convertPxtoNumber(fontSize.fontSiz as string)

    const isDisplayOn = useAppSelector((state) => state.fontSizeReducer.isDisplayOn)
    return {
        handler,
        numValue,
        isDisplayOn,
    }
}
