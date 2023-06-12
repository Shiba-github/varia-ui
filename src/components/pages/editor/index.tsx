import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { FontSize } from './fontSize'
import { ButtonView } from '../buttonView'
import { OnOffArea } from '../onOffArea'
import { PseudoDisplay } from '../pseudoDisplay'
import { PseudoArea } from '../pseudoArea'

export const Editor = () => {
    return (
        <Grid
            templateAreas={`
                "pseudo pseudoDisplay button"
                "pseudo edit button"
                "custom custom code"
            `}
            gridTemplateRows={'0.1fr 1fr 1fr'}
            gridTemplateColumns={'15rem 1fr 35rem'}
            height={'100vh'}
            width={'100vw'}
            overflowX={'hidden'}
            overflowY={'hidden'}
        >
            <GridItem area={'pseudo'} backgroundColor={'primary.500'} overflowX={'hidden'} overflowY={'hidden'}>
                <PseudoArea />
            </GridItem>
            <GridItem
                area={'pseudoDisplay'}
                borderBottom={'1px solid primary.500'}
                backgroundColor={'primary.400'}
                overflowX={'hidden'}
                overflowY={'hidden'}
            >
                <PseudoDisplay />
            </GridItem>
            <GridItem
                area={'custom'}
                display={'flex'}
                flexDirection={'column'}
                backgroundColor={'primary.500'}
                width={'15rem'}
                height={'90%'}
                flexWrap={'wrap'}
                minHeight={'0'}
            >
                <OnOffArea />
            </GridItem>
            <GridItem
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                backgroundColor={'gray.500'}
                overflowX={'hidden'}
                overflowY={'hidden'}
            >
                {/* <CssEditArea /> */}
                <FontSize />
            </GridItem>
            <GridItem
                area={'button'}
                backgroundColor={'gray.200'}
                overflow={'hidden'}
                height={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                display={'grid'}
            >
                {/* <ButtonView /> */}
                <ButtonView />
            </GridItem>
            <GridItem
                display={'flex'}
                area={'code'}
                backgroundColor={'primary.300'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {/* <CodeArea /> */}
            </GridItem>
        </Grid>
    )
}
