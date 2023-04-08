import * as React from 'react';
import List from '@mui/material/List';
import { ListSubheader } from '@mui/material';
import Todo from './Todo';

type TodoList = {
	id: number;
	title: string;
	description: string;
};

export default function Todos({
	list,
}: {
	list: TodoList[];
}) {
	console.log('todo map', list);
	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 360,
				bgcolor: 'background.paper',
			}}
		>
			{/* {list.map((todo) => (
				<Todo
					key={todo.id}
					{...todo}
				/>
			))} */}
		</List>
	);
}
