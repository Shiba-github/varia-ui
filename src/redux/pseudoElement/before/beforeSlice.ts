import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import fontSizeIconPath from '@/asets/fontSize/fontSize.png'

type TypeBefore = {
    titile: string
    cssTitle: string
    iconPath: string
    isDisplayOn: boolean
}

const initialState: TypeBefore = {
    titile: 'Before',
    cssTitle: '::before',
    iconPath: fontSizeIconPath, // TODO: 画像仮置き
    isDisplayOn: false,
}

export const beforeSlice = createSlice({
    name: 'before',
    initialState,
    reducers: {
        setIsDisplayOn: (state, action: PayloadAction<boolean>) => {
            state.isDisplayOn = action.payload
        },
    },
})

export const beforeSliceActions = beforeSlice.actions

export default beforeSlice.reducer
