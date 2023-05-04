import { CSSObject } from '@emotion/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import fontSizeIconPath from '@/asets/fontSize/fontSize.png'

type TypeFontSize = {
    titile: string
    iconPath: string
    fontSize: CSSObject
    isDisplayOn: boolean
}

const initialState: TypeFontSize = {
    titile: 'FontSize',
    iconPath: fontSizeIconPath,
    fontSize: {
        fontSize: '12px',
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
        mergeCss: (state, action: PayloadAction<CSSObject>) => {
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

export const fontSizeSliceActions = fontSizeSlice.actions

export default fontSizeSlice.reducer
