import React, { useState } from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip, Flex, Text } from '@chakra-ui/react'
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
    sliderValue: number | undefined
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
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '0.8rem',
    backgroundColor: '#fff',
    padding: '16px',
}

const defaultTitleTextStyles = {
    width: '6.5rem',
    color: '#27272A',
    fontSize: '1.2rem',
    fontWeight: '500',
    marginLeft: '1rem',
    marginRight: '1rem',
}
const defaultSliderStyles = {
    marginRight: '16px',
}
const defaultSliderMarkStyles = {
    color: '#27272A',
    marginTop: '12px',
    marginLeft: '-10px',
    fontSize: 'sm',
}
const defaultSliderTrackStyles = {
    background: '#f0f0f0',
}
const defaultSliderThumbStyles = {}
const defaultSliderFilledTrackStyles = {
    background: '#59A5D9',
}
const defaultTooltipStyles = {
    color: '#fff',
    borderRadius: '8px',
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
    sliderDefaultValue = 20,
    sliderValue,
    sliderMinValue = 0,
    sliderMaxValue = 100,
    onChangeSliderHandler,
    sliderMarkNumList = [20, 50, 80],
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
        <Flex css={mergedWrapperStyles} borderColor="secondary.200">
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
                            <SliderMark key={value} css={mergedSliderMarkStyles} value={value} color="#3D4054">
                                {value}
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
                    backgroundColor="secondary.400"
                >
                    <SliderThumb css={mergedSliderThumbStyles} />
                </Tooltip>
            </Slider>
        </Flex>
    )
}
