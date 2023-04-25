
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { DummyButton } from '@/components/shared/dummy/Button'

export const Template = () => {
    return (
        <>
            <Flex bgColor={'twitter.200'} flexDirection={'column'} alignItems={'center'} height={'100vh'}>
                <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                    <Flex m={4}>
                        {/* <HandWrittenLikeButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        {/* <SimpleRoundIconButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        {/* <RealShadowButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        {/* <SpreadContentButton /> */}
                        <DummyButton />
                    </Flex>
                </Flex>
                <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                    <Flex m={4}>
                        {/* <OrangeGradationButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        {/* <PushNeumorphismButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        {/* <BorderGradientButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        {/* <FloatMonochromeButton /> */}
                        <DummyButton />
                    </Flex>
                </Flex>
                <Flex flexDirection={'row'} alignItems={'center'} p={4}>
                    <Flex m={4}>
                        {/* <AppearanceArrowButton /> */}
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        <DummyButton />
                    </Flex>
                    <Flex m={4}>
                        <DummyButton />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
