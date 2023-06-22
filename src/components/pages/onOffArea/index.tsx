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
                py={'0.5rem'}
                bg={'secondary.600'}
                fontSize={'2xl'}
            >
                Basics
            </Text>
            <FontSizeOnOffButton />
        </>
    )
}
