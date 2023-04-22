import { CSSObject } from '@emotion/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type typecolor = {
    color: CSSObject
}

const initialState: typecolor = {
    color: {
        '_default': {
		    color: '12px',
        }
    }
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        mergeCSS: (state, action:PayloadAction<CSSObject>) => {
            state.color = {
                ...state.color,
                ...action.payload
        }
    },
    }
})

export const { mergeCSS } = colorSlice.actions
export const color = (state: RootState) => state.colorReducer.color

export default colorSlice.reducer
