import { Box, Button, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const isEditor = location.pathname === '/editor'
    let buttonLink

    if (isEditor) {
        buttonLink = <Link to="/">Template</Link>
    } else buttonLink = <Link to="/editor">Editor</Link>

    return (
        <Flex bg="whiteAlpha.300" justifyContent="space-between">
            <Box
                as="h1"
                bgGradient="linear(to-l, #7928CA, cyan)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="bold"
                pt={4}
                pb={4}
                pl={6}
            >
                Varia UI
            </Box>
            <Flex flexDirection={'column'} justifyContent={'center'}>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    w={'157px'}
                    variant="solid"
                    size="lg"
                    bg="primary.600"
                    color="white"
                    mr={4}
                    _hover={{ bg: 'primary.500' }}
                    _active={{
                        bg: 'primary.500',
                        color: 'white',
                    }}
                >
                    {buttonLink}
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header
