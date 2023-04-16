import { ChakraProvider, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import Header from './components/common/Header'

import { Route, Routes } from 'react-router-dom'
import { store } from './redux/store'
import { mainTheme } from './style/mainTheme'
// import Editor from './page/Editor/Editor'
// import Template from './page/Template/Template'

const App = () => {
    useEffect(() => {
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'hidden'
    }, [])

    return (
        <Provider store={store}>
            <ChakraProvider theme={mainTheme}>
                <Flex flexDirection="column">
                    <Header />
                    {/* <Routes>
                        <Route index element={<Template />} />
                        <Route path="editor" element={<Editor />} />
                    </Routes> */}
                </Flex>
            </ChakraProvider>
        </Provider>
    )
}

export default App
