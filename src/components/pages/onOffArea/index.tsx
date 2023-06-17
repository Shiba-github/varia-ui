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
                fontSize={'2xl'}
                borderBottom={'0.1px solid #A0AEC0'}
            >
                Basics
            </Text>
            <FontSizeOnOffButton />
        </>
    )
}
