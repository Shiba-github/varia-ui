import { Button } from '@chakra-ui/react'
import { css, CSSObject } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { mergeAll } from '../../../../redux/cssObject/cssObjectSlice'

export const HandWrittenLikeButton = () => {
    const cssStates = useAppSelector((state) => state.cssObjectReducer.cssObject)
    const fontSize = useAppSelector((state) => state.fontSizeReducer.fontSize)
    const cssObject = useAppSelector((state) => state.cssObjectReducer.cssObject)
    const dispatch = useAppDispatch()
    dispatch(
        mergeAll()
    )
    // console.log('cssState: ', cssStates)
    // console.log('fontsize: ', fontSize)
    console.log(cssObject)
    return (
        <Button>HandWrittenLikeButton</Button>
    )
}