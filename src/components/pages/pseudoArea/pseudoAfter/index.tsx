import { OnOffButton } from '@/components/shared/onOffButton'
import React from 'react'
import { usePseudoAfterHook } from './hooks'

export const PseudoAfter = () => {
    const { titleText, fontSizeIconPath, isDisplay, onClickHandler } = usePseudoAfterHook()
    return (
        <OnOffButton
            text={titleText}
            iconPath={fontSizeIconPath}
            isDisplay={isDisplay}
            onClickHandler={onClickHandler}
        />
    )
}
