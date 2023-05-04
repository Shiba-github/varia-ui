import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { PseudoAfter } from './pseudoAfter'
import { PseudoBefore } from './pseudoBefore'

export const PseudoArea = () => {
    return (
        <Flex flexDirection={'column'} width={'100%'} height={'100%'} color={'white'}>
            <Text textAlign={'center'} fontSize={'1.5rem'}>
                Pseudo Element
            </Text>
            <PseudoBefore />
            <PseudoAfter />
            <Text textAlign={'center'} fontSize={'1.5rem'}>
                Pseudo Class
            </Text>
        </Flex>
    )
}
