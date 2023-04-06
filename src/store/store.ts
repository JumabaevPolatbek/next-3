import {
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import {
	Context,
	createWrapper,
	MakeStore,
} from 'next-redux-wrapper';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';
import { Action } from 'redux';
import { InitState, rootReducer, todo } from './reducer';

const makeStore: MakeStore<any> = () => {
	configureStore({
		reducer: rootReducer,
		devTools: true,
	});
};
export type AppState = ReturnType<typeof makeStore>;

// export type AppDispatch = typeof makeStore.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;
export const useAppSelector: TypedUseSelectorHook<AppState> =
	useSelector;
// export const useAppDispatch = () =>
// 	useDispatch<AppDispatch>();
// export default store;
export const wrapper = createWrapper<AppState>(makeStore,{debug:true});
