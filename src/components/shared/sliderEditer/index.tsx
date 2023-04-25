import React, { useState } from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Flex,
    Text,
    FlexboxProps,
} from '@chakra-ui/react'
import { css, CSSObject } from '@emotion/react'

type typeProps = {
    wrapperStyles?: CSSObject
    titleTextStyles?: CSSObject
    sliderStyles?: CSSObject
    sliderMarkStyles?: CSSObject
    sliderTrackStyles?: CSSObject
    sliderThumbStyles?: CSSObject
    sliderFilledTrackStyles?: CSSObject
    tooltipStyles?: CSSObject
    titleText: string
    sliderId: string
    sliderDefaultValue?: number
    sliderValue: number
    sliderMinValue?: number
    sliderMaxValue?: number
    onChangeSliderHandler: (v: number) => void
    sliderMarkNumList?: number[]
    tooltipHasArrow?: boolean
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left'
}

const defaultWrapperStyles = {
    flexDirection: 'row' as const,
    alingItems: 'center',
    width: '50rem',
    marginTop: '1rem',
    paddingTop: '0.5rem',
    border: '1px',
    borderRadius: '1rem',
    borderColor: 'gray',
    backgroundColor: 'gray',
}

const defaultTitleTextStyles = {
    width: '6rem',
    color: 'black',
    fontSize: '1.2rem',
    marginLeft: '1rem',
    marginRight: '1rem',
}
const defaultSliderStyles = {}
const defaultSliderMarkStyles = {
    marginTop: '1px',
    marginLeft: '-2.5px',
    fontSize: '15px',
}
const defaultSliderTrackStyles = {}
const defaultSliderThumbStyles = {}
const defaultSliderFilledTrackStyles = {}
const defaultTooltipStyles = {
    color: 'white',
    backgroundColor: 'green',
}

export const SliderEditer = ({
    wrapperStyles = defaultWrapperStyles,
    titleTextStyles = defaultTitleTextStyles,
    sliderStyles = defaultSliderStyles,
    sliderMarkStyles = defaultSliderMarkStyles,
    sliderTrackStyles = defaultSliderTrackStyles,
    sliderThumbStyles = defaultSliderThumbStyles,
    sliderFilledTrackStyles = defaultSliderFilledTrackStyles,
    tooltipStyles = defaultTooltipStyles,
    titleText,
    sliderId,
    sliderDefaultValue = 25,
    sliderValue,
    sliderMinValue = 0,
    sliderMaxValue = 200,
    onChangeSliderHandler,
    sliderMarkNumList = [50, 100, 150],
    tooltipHasArrow = true,
    tooltipPlacement = 'top',
}: typeProps) => {
    const [showTooltip, setShowTooltip] = useState(true)
    const mergedWrapperStyles = {
        ...defaultWrapperStyles,
        ...css(wrapperStyles),
    }
    const mergedTitleTextStyles = {
        ...defaultTitleTextStyles,
        ...css(titleTextStyles),
    }
    const mergedSliderStyles = {
        ...defaultSliderStyles,
        ...css(sliderStyles),
    }
    const mergedSliderMarkStyles = {
        ...defaultSliderMarkStyles,
        ...css(sliderMarkStyles),
    }
    const mergedSliderTrackStyles = {
        ...defaultSliderTrackStyles,
        ...css(sliderTrackStyles),
    }
    const mergedSliderThumbStyles = {
        ...defaultSliderThumbStyles,
        ...css(sliderThumbStyles),
    }
    const mergedSliderFilledTrackStyles = {
        ...defaultSliderFilledTrackStyles,
        ...css(sliderFilledTrackStyles),
    }
    const mergedTooltipStyles = {
        ...defaultTooltipStyles,
        ...css(tooltipStyles),
    }
    return (
        <Flex css={mergedWrapperStyles}>
            <Text css={mergedTitleTextStyles}>{titleText}</Text>
            <Slider
                css={mergedSliderStyles}
                id={sliderId}
                defaultValue={sliderDefaultValue}
                value={sliderValue}
                min={sliderMinValue}
                max={sliderMaxValue}
                onChange={(v) => onChangeSliderHandler(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <>
                    {sliderMarkNumList.map((value) => {
                        return (
                            <SliderMark key={value} css={mergedSliderMarkStyles} value={value}>
                                {value}px
                            </SliderMark>
                        )
                    })}
                </>
                <SliderTrack css={mergedSliderTrackStyles}>
                    <SliderFilledTrack css={mergedSliderFilledTrackStyles} />
                </SliderTrack>
                <Tooltip
                    css={mergedTooltipStyles}
                    hasArrow={tooltipHasArrow}
                    placement={tooltipPlacement}
                    isOpen={showTooltip}
                    label={`${sliderValue}px`}
                >
                    <SliderThumb css={mergedSliderThumbStyles} />
                </Tooltip>
            </Slider>
        </Flex>
    )
}
