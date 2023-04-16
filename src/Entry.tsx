import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
const container = document.getElementById('root')
//公式で推奨しているやり方なのでOK
/* eslint @typescript-eslint/no-non-null-assertion: 0 */
const root = createRoot(container!)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
