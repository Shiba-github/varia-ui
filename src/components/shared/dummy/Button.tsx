import React from 'react'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

export const DummyButton = () => {
    return (
        <Button leftIcon={<AddIcon />} color="white" size="lg" bg="red.200">
            Dummy
        </Button>
    )
}
