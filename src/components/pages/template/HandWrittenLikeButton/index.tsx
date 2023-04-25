import { Button } from '@chakra-ui/react'
import { css, CSSObject } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { mergeAll } from '../../../../redux/cssObject/cssObjectSlice'

export const HandWrittenLikeButton = () => {
    const cssStates = useAppSelector((state) => state.cssObjectReducer.cssObject)
    const reducer = useAppSelector((state) => state.fontSizeReducer.fontSize)
    return <Button>HandWrittenLikeButton</Button>
}
