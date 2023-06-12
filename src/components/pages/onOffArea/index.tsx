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
                color={'white'}
                fontWeight={'bold'}
                marginBottom={'0.5rem'}
                fontSize={'2rem'}
            >
                Basics
            </Text>
            <FontSizeOnOffButton />
        </>
    )
}
