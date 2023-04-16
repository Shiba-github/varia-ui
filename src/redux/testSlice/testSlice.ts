import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type counterState = {
    count: number
}

const initialState: counterState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.test.count

export default counterSlice.reducer
