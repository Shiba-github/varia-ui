import { CSSObject } from '@emotion/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type typeFontSize = {
    fontSize: CSSObject
    isDisplayOn: boolean
}

const initialState: typeFontSize = {
    fontSize: {
        _default: {
            fontSize: '12px',
        },
        '&:hover': {
            fontSize: 'max(2vw, 14px)',
        },
        '&::after': {
            fontSize: '20px',
        },
        '@keyframes fontKeyFrame001': {
            from: { fontSize: '5px' },
            '50%': { fontSize: '15px !important' },
            to: { fontSize: '10px' },
        },
    },
    isDisplayOn: false,
}

export const fontSizeSlice = createSlice({
    name: 'fontSize',
    initialState,
    reducers: {
        mergeCSS: (state, action: PayloadAction<CSSObject>) => {
            state.fontSize = {
                ...state.fontSize,
                ...action.payload,
            }
        },
        setIsDisplayOn: (state, action: PayloadAction<boolean>) => {
            state.isDisplayOn = action.payload
        },
    },
})

export const { mergeCSS } = fontSizeSlice.actions

export default fontSizeSlice.reducer
