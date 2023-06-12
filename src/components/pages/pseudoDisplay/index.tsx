import { useAppSelector } from '@/hooks'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const PseudoDisplay = () => {
    const pseudo = useAppSelector((state) => state.pseudoReducer.pseudoList)
    return (
        <Flex height="100%" alignItems="center" marginLeft="1rem">
            <Text color="white">選択中の疑似要素 ➡ {pseudo}</Text>
        </Flex>
    )
}
