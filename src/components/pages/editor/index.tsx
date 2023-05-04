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
            <GridItem area={'pseudo'} backgroundColor={'rgb(26 32 44)'} overflowX={'hidden'} overflowY={'scroll'}>
                <PseudoArea />
            </GridItem>
            <GridItem
                area={'pseudoDisplay'}
                backgroundColor={'rgb(26 32 44)'}
                overflowX={'hidden'}
                overflowY={'hidden'}
            >
                <PseudoDisplay />
            </GridItem>
            <GridItem
                area={'custom'}
                display={'flex'}
                flexDirection={'column'}
                backgroundColor={'rgb(26 32 44)'}
                width={'15rem'}
                height={'90%'}
                flexWrap={'wrap'}
                minHeight={'0'}
            >
                <OnOffArea />
            </GridItem>
            <GridItem area={'edit'} backgroundColor={'gray.500'} overflowX={'hidden'} overflowY={'scroll'}>
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
                backgroundColor={'rgb(26 32 44)'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                {/* <CodeArea /> */}
            </GridItem>
        </Grid>
    )
}
