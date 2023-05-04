import React from 'react'
import { OnOffButton } from '@/components/shared/onOffButton'
import { useFontSizeOnOffButtonHook } from './hooks'

export const FontSizeOnOffButton = () => {
    const { titleText, fontSizeIconPath, isDisplay, onClickHandler } = useFontSizeOnOffButtonHook()
    return (
        <OnOffButton
            text={titleText}
            iconPath={fontSizeIconPath}
            isDisplay={isDisplay}
            onClickHandler={onClickHandler}
        />
    )
}
