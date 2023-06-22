import { useAppSelector } from '@/hooks'
import { Flex, Text, Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

export const PseudoDisplay = () => {
    const pseudo = useAppSelector((state) => state.pseudoReducer.pseudoList)
    return (
        <Flex height="100%" alignItems="center" marginLeft="1rem">
            <Text color="white">
                選択中の疑似要素
                <ChevronRightIcon boxSize={6} pb={1} />
                {pseudo[0] && (
                    <Box
                        display={'inline-block'}
                        color={'white'}
                        bg={'blue.500'}
                        borderRadius={'12px'}
                        padding={'0.2rem 0.6rem'}
                    >
                        {pseudo}
                    </Box>
                )}
            </Text>
        </Flex>
    )
}
