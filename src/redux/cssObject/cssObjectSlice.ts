import { CSSObject } from '@emotion/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { color } from '../color/colorSlice'
// import { fontSize } from '@/redux/fontSize/fontSizeSlice'
import { RootState } from '../store'

type counterState = {
    cssObject: CSSObject
}

const initialState: counterState = {
    cssObject: {}
}

export const cssObjectSlice = createSlice({
    name: 'cssObject',
    initialState,
    reducers: {
        mergeAll: (state) => {
            const newCSSObject = {
                ...state.cssObject,
                // ...fontSize,
                ...color
            }
            // console.log(fontSize)
            // if (state.cssObject === newCSSObject) return
            state.cssObject = newCSSObject
        },
    },
})

export const { mergeAll } = cssObjectSlice.actions
export const cssObject = (state: RootState) => state.cssObjectReducer.cssObject

export default cssObjectSlice.reducer
