import { OnOffButton } from '@/components/shared/onOffButton'
import React from 'react'
import { usePseudoBeforeHook } from './hooks'

export const PseudoBefore = () => {
    const { titleText, fontSizeIconPath, isDisplay, onClickHandler } = usePseudoBeforeHook()
    return (
        <OnOffButton
            text={titleText}
            iconPath={fontSizeIconPath}
            isDisplay={isDisplay}
            onClickHandler={onClickHandler}
        />
    )
}
