import React from 'react'
import { css } from '@emotion/react'
import { useCssStylesHooks } from './hooks'

export const ButtonView = () => {
    const allCssStyles = useCssStylesHooks()
    const cssProps = css(allCssStyles)
    return (
        <>
            <button css={cssProps}>Text</button>
        </>
    )
}
