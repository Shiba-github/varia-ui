import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { PseudoAfter } from './pseudoAfter'
import { PseudoBefore } from './pseudoBefore'

export const PseudoArea = () => {
    return (
        <Flex flexDirection={'column'} width={'100%'} height={'100%'} color={'white'}>
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                color={'white'}
                fontWeight={'bold'}
                marginBottom={'0.5rem'}
                fontSize={'1.6rem'}
            >
                Pseudo Element
            </Text>
            <PseudoBefore />
            <PseudoAfter />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                color={'white'}
                fontWeight={'bold'}
                marginTop={'0.5rem'}
                marginBottom={'0.5rem'}
                fontSize={'1.6rem'}
            >
                Pseudo Class
            </Text>
        </Flex>
    )
}
