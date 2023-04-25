import { configureStore } from '@reduxjs/toolkit'
import colorSlice from './color/colorSlice'
import cssObjectSlice from './cssObject/cssObjectSlice'
import fontSizeSlice from './fontSize/fontSizeSlice'
// import cssCustomAnimeAreaSlice from './components/cssCustomAnimeArea/cssCustomAnimeAreaSlice'
// import pseudoAreaSlice from './components/pseudoArea/pseudoAreaSlice'
// import counterReducer from './redux_test/counterSlice'

export const store = configureStore({
    reducer: {
        cssObjectReducer: cssObjectSlice,
        fontSizeReducer: fontSizeSlice,
        colorReducer: colorSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
