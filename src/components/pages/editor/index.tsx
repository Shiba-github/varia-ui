import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { FontSize } from './fontSize'

export const Editor = () => {
    return (
        <Grid
            templateAreas={`
                "pseudo edit button"
                "custom custom code"
            `}
            gridTemplateRows={'1fr 1fr'}
            gridTemplateColumns={'15rem 1fr 35rem'}
            height={'100vh'}
            width={'100vw'}
            overflowX={'hidden'}
            overflowY={'hidden'}
        >
            <GridItem area={'pseudo'} backgroundColor={'rgb(26 32 44)'} overflowX={'hidden'} overflowY={'scroll'}>
                {/* <PseudoArea /> */}
            </GridItem>
            <GridItem display={'flex'} flexDirection={'column'} area={'custom'} backgroundColor={'rgb(26 32 44)'}>
                {/* <CssCustomArea /> */}
            </GridItem>
            <GridItem area={'edit'} backgroundColor={'gray.500'} overflowX={'hidden'} overflowY={'scroll'}>
                {/* <CssEditArea /> */}
                <FontSize />
            </GridItem>
            <GridItem area={'button'} backgroundColor={'gray.200'} overflow={'hidden'}>
                {/* <ButtonView /> */}
            </GridItem>
            <GridItem
                display={'flex'}
                area={'code'}
                backgroundColor={'rgb(26 32 44)'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {/* <CodeArea /> */}
            </GridItem>
        </Grid>
    )
}
