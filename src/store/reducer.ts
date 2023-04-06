import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
export type Todo = {
	id: number;
	title: string;
	description: string;
};
export type InitState = {
	id: number;
	todos: Todo[];
};
const initialState: InitState = {
	id: 0,
	todos: [],
};

export const todo = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (
			state,
			action: PayloadAction<{
				title: string;
				description: string;
			}>
		) => {
			state.id += 1;
			state.todos.push({
				id: state.id,
				title: action.payload.title,
				description: action.payload.description,
			});
		},
		removeTodo: (
			state,
			action: PayloadAction<number>
		) => {
			state.todos.filter(
				({ id }) => id !== action.payload
			);
		},
		editTodo: (
			state,
			action: PayloadAction<{
				id: number;
				title: string;
				description: string;
			}>
		) => {
			state.todos[action.payload.id].title =
				action.payload.title;
			state.todos[action.payload.id].description =
				action.payload.description;
		},
	},
	
});

export const { addTodo, removeTodo, editTodo } =
	todo.actions;
// export type StateTodo=ReturnType<typeof todo>
export const rootReducer = combineReducers({
	[todo.name]: todo.reducer,
});
