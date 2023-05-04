import { Text } from '@chakra-ui/react'
import React from 'react'
import { FontSizeOnOffButton } from './fontSizeOnOffButton'

export const OnOffArea = () => {
    return (
        <>
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'#f5b199'}
                fontSize={'2rem'}
            >
                Basics
            </Text>
            <FontSizeOnOffButton />
        </>
    )
}
