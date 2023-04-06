import * as React from 'react';
import List from '@mui/material/List';
import {
	AppState,
	useAppSelector,
} from '../../store/store';
import { ListSubheader } from '@mui/material';
import Todo from './Todo';
import { GetStaticProps } from 'next';
import store from '../../store/store';
export default function Todos() {
	const { todos } = useAppSelector(
		(state) => state.todos
	);
	console.log(todos);
	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 360,
				bgcolor: 'background.paper',
			}}
		>
			{/* {todos.length < 1 && (
				<ListSubheader
					component='div'
					id='nested-list-subheader'
				>
					У вас нет записов!
				</ListSubheader>
			)}
			{
				todos.map((todo) => (
					<Todo
						key={todo.id}
						{...todo}
					/>
				))} */}
			{store.getState().todos.todos.map((todo) => (
				<div key={todo.id}>1 {todo.title}</div>
			))}
		</List>
	);
}
