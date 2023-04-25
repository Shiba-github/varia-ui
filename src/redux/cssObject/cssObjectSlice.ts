import { CSSObject } from '@emotion/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { color } from '../color/colorSlice'
import { RootState } from '../store'

type counterState = {
    cssObject: CSSObject
}

const initialState: counterState = {
    cssObject: {},
}

export const cssObjectSlice = createSlice({
    name: 'cssObject',
    initialState,
    reducers: {
        mergeAll: (state) => {
            const newCSSObject = {
                ...state.cssObject,
                ...color,
            }
            state.cssObject = newCSSObject
        },
    },
})

export const { mergeAll } = cssObjectSlice.actions
export const cssObject = (state: RootState) => state.cssObjectReducer.cssObject

export default cssObjectSlice.reducer
