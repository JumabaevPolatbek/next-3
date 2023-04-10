import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducer';

export const store = configureStore({
	reducer: {
		[todoReducer.name]: todoReducer.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
