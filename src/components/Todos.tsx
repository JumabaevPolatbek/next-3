import List from '@mui/material/List';
import React from 'react';
import { Todo } from '../redux/types';
import TodoItem from './TodoItem';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 360,
				bgcolor: 'background.paper',
			}}
		>
			{todos.map((todo) => {
				return (
					<TodoItem
						todo={todo}
						key={todo.id}
					/>
				);
			})}
		</List>
	);
};

export default Todos;
