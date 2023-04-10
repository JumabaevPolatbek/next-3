import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { Todo, State } from './types';

const initialState: State = {
	id: 0,
	todos: [],
};
export const todoReducer = createSlice({
	name: 'Todo-List',
	initialState,
	reducers: {
		addTodo: (
			state,
			action: PayloadAction<Omit<Todo, 'id'>>
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
			console.log(action.payload);
			state.todos = state.todos.filter(
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
	todoReducer.actions;
export default todoReducer.reducer;
