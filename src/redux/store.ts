import { configureStore } from '@reduxjs/toolkit'
// import cssCustomAnimeAreaSlice from './components/cssCustomAnimeArea/cssCustomAnimeAreaSlice'
// import pseudoAreaSlice from './components/pseudoArea/pseudoAreaSlice'
// import counterReducer from './redux_test/counterSlice'
import testReducer from './testSlice/testSlice'

export const store = configureStore({
    reducer: {
        test: testReducer,
        // cssCustomAnimeArea: cssCustomAnimeAreaSlice,
        // pseudoArea: pseudoAreaSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
