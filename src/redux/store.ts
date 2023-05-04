import { configureStore } from '@reduxjs/toolkit'
import colorSlice from './color/colorSlice'
import cssObjectSlice from './cssObject/cssObjectSlice'
import fontSizeSlice from './fontSize/fontSizeSlice'
import pseudoSlice from './pseudo/pseudoSlice'
import afterSlice from './pseudoElement/after/afterSlice'
import beforeSlice from './pseudoElement/before/beforeSlice'
// import cssCustomAnimeAreaSlice from './components/cssCustomAnimeArea/cssCustomAnimeAreaSlice'
// import pseudoAreaSlice from './components/pseudoArea/pseudoAreaSlice'
// import counterReducer from './redux_test/counterSlice'

export const store = configureStore({
    reducer: {
        cssObjectReducer: cssObjectSlice,
        // css
        fontSizeReducer: fontSizeSlice,
        colorReducer: colorSlice,
        // pseudo Element
        beforeReducer: beforeSlice,
        afterReducer: afterSlice,
        // tokusyu
        pseudoReducer: pseudoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
