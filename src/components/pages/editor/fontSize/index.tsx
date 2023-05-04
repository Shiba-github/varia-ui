import React from 'react'
import { SliderEditer } from '@/components/shared/sliderEditer'
import { useFontSizeHook } from './hooks'

export const FontSize = () => {
    const { handler, numValue, isDisplayOn } = useFontSizeHook()
    if (isDisplayOn === false) return null
    return (
        <SliderEditer
            titleText="Font Size"
            sliderId="fontsize"
            sliderValue={numValue}
            onChangeSliderHandler={handler}
        />
    )
}
