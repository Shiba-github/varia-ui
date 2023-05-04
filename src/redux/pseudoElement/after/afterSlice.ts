import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import fontSizeIconPath from '@/asets/fontSize/fontSize.png'

type TypeAfter = {
    titile: string
    cssTitle: string
    iconPath: string
    isDisplayOn: boolean
}

const initialState: TypeAfter = {
    titile: 'After',
    cssTitle: '::after',
    iconPath: fontSizeIconPath, // TODO: 画像仮置き
    isDisplayOn: false,
}

export const afterSlice = createSlice({
    name: 'After',
    initialState,
    reducers: {
        setIsDisplayOn: (state, action: PayloadAction<boolean>) => {
            state.isDisplayOn = action.payload
        },
    },
})

export const afterSliceActions = afterSlice.actions

export default afterSlice.reducer
