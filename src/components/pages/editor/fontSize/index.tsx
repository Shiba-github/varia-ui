import React, { useState } from 'react'
import { SliderEditer } from '@/components/shared/sliderEditer'

export const FontSize = () => {
    const [sliderValue, setSliderValue] = useState(25)

    return (
        <SliderEditer
            titleText="Font Size"
            sliderId="fontsize"
            sliderValue={sliderValue}
            onChangeSliderHandler={setSliderValue}
        />
    )
}
