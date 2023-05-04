import React from 'react'
import { Button, Image, Text } from '@chakra-ui/react'
import { CSSObject } from '@emotion/react'

type propsType = {
    text: string
    iconPath: string
    isDisplay: boolean
    onClickHandler: () => void
    buttonStyles?: CSSObject
    onClickBackgroundColor?: string
    whileHoverBackgroundColor?: string
    whileHoverOnClickBackgroundColor?: string
}
const defaultStyles = {
    // flexDirection: 'row',
    alignItems: 'center',
    width: '15rem',
    height: '2rem',
    padding: '0.2rem',
    color: 'white',
    backgroundColor: '#1a202c',
    opacity: '1',
    fontSize: '1rem',
    justifyContent: 'start',
    boxShadow: 'none !important',
    borderRadius: '0rem',
    cursor: 'pointer',
    paddingLeft: '1rem',
}

export const OnOffButton = ({
    text,
    iconPath,
    isDisplay,
    onClickHandler,
    buttonStyles = defaultStyles,
    onClickBackgroundColor = 'teal.500',
    whileHoverBackgroundColor = '#3a4762',
    whileHoverOnClickBackgroundColor = 'teal.400',
}: propsType) => {
    const mergedStyles = {
        ...defaultStyles,
        ...buttonStyles,
        backgroundColor: isDisplay ? onClickBackgroundColor : defaultStyles.backgroundColor,
        '&:hover': {
            opacity: '0.5',
            backgroundColor: isDisplay ? whileHoverOnClickBackgroundColor : whileHoverBackgroundColor,
        },
    }
    return (
        <Button css={mergedStyles} onClick={() => onClickHandler()}>
            <Image src={iconPath} boxSize="20px" />
            <Text fontSize={buttonStyles.fontSize} color={buttonStyles.color}>
                &emsp;{text}
            </Text>
        </Button>
    )
}
