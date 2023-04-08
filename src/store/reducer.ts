import { createSlice } from '@reduxjs/toolkit';
import {
	Action,
	PayloadAction,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import { RootState } from './store';

export type Todo = {
	id: number;
	title: string;
	description: string;
};

export interface StateStore {
	id: number;
	todos: Todo[];
}
const initialState: StateStore = {
	id: 0,
	todos: [],
};
export const reducer = createSlice({
	name: 'Todo-List',
	initialState: initialState,
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
				(todo) => todo.id !== action.payload
			);
		},
		editTodo: (state, action: PayloadAction<Todo>) => {
			const index = state.todos.findIndex(
				(todo) => todo.id === action.payload.id
			);
			state.todos[index].title = action.payload.title;
			state.todos[index].description =
				action.payload.description;
		},
	},
});
export const { addTodo, removeTodo, editTodo } =
	reducer.actions;

// export const selectTodo = (state: RootState) =>
// 	state['Todo-List'].todos;
