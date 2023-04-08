import {
	Action,
	PayloadAction,
	configureStore,
	ThunkAction,
	AnyAction,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { useDispatch } from 'react-redux';
import { reducer, StateStore } from './reducer';

// const store = configureStore({
// 	reducer: {
// 		[reducer.name]: reducer.reducer,
// 	},
// });
export let store: ToolkitStore<
	{ 'Todo-List': StateStore },
	AnyAction,
	[
		ThunkMiddleware<
			{ 'Todo-List': StateStore },
			AnyAction,
			undefined
		>
	]
>;
export default function getStore(initialState?: RootState) {
	// const initialStore = configureStore({
	// 	reducer: {
	// 		[reducer.name]: reducer.reducer,
	// 	},
	// 	preloadedState: initialState,
	// });
	// return initialStore;
	store = configureStore({
		reducer: {
			[reducer.name]: reducer.reducer,
		},
		preloadedState: initialState,
	});
	return store;
}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
export const useAppDispatch: () => AppDispatch =
	useDispatch;
export const useAppSelector = (state: RootState) =>
	state['Todo-List'];
