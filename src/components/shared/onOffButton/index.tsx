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
    height: '2rem',
    padding: '0.2rem',
    color: 'white',
    backgroundColor: '#2F3A51',
    opacity: '1',
    fontSize: '1rem',
    justifyContent: 'start',
    boxShadow: 'none !important',
    cursor: 'pointer',
    paddingLeft: '1rem',
}

export const OnOffButton = ({
    text,
    iconPath,
    isDisplay,
    onClickHandler,
    buttonStyles = defaultStyles,
    onClickBackgroundColor = '#4299E1',
    whileHoverBackgroundColor = '#718096',
    whileHoverOnClickBackgroundColor = '#63B3ED',
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
        <Button css={mergedStyles} onClick={() => onClickHandler()} borderRadius={'0'}>
            <Image src={iconPath} boxSize="20px" />
            <Text fontSize={buttonStyles.fontSize} color={buttonStyles.color}>
                &emsp;{text}
            </Text>
        </Button>
    )
}
