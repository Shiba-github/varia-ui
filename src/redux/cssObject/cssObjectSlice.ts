import { CSSObject } from '@emotion/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
        mergeToAll: (state, action: PayloadAction<CSSObject>) => {
            // ここの書き方が無限ループの原因説濃厚
            const newCSSObject = {
                ...state.cssObject,
                ...action.payload,
            }
            state.cssObject = newCSSObject
        },
    },
})

export const { mergeToAll } = cssObjectSlice.actions
export const cssObject = (state: RootState) => state.cssObjectReducer.cssObject

export default cssObjectSlice.reducer
