import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TypePseudo = {
    pseudoList: string[]
}

const initialState: TypePseudo = {
    pseudoList: [],
}

export const pseudoSlice = createSlice({
    name: 'pseudo',
    initialState,
    reducers: {
        setPseudo: (state, action: PayloadAction<string>) => {
            state.pseudoList.push(action.payload)
        },
        removePseudo: (state, action: PayloadAction<string>) => {
            const newState = state.pseudoList.filter((pseudoTitle) => {
                return pseudoTitle !== action.payload
            })
            state.pseudoList = newState
        },
    },
})

export const pseudoSliceActions = pseudoSlice.actions

export default pseudoSlice.reducer
