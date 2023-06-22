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
                bg={'secondary.600'}
                py={'8px'}
                fontSize={'2xl'}
            >
                Pseudo Element
            </Text>
            <PseudoBefore />
            <PseudoAfter />
            <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'secondary.600'}
                color={'white'}
                fontWeight={'bold'}
                py={'0.5rem'}
                mt={'1.5rem'}
                mb={'0.5rem'}
                fontSize={'2xl'}
            >
                Pseudo Class
            </Text>
        </Flex>
    )
}
