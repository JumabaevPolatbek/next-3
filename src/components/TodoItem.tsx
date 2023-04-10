import React from 'react';
import { Todo } from '../redux/types';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../redux/hook';
import { editTodo, removeTodo } from '../redux/reducer';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import Link from 'next/link';
type Props = {
	todo: Todo;
};
const TodoItem: React.FC<Props> = ({ todo }) => {
	const { title, description, id } = todo;
	const dispatch = useAppDispatch();
	const handleRemove = () => {
		dispatch(removeTodo(id));
		toast.success(`${title} todo deleted!!`, {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};
	return (
		<ListItem
			secondaryAction={
				<IconButton
					edge='end'
					aria-label='delete'
					onClick={handleRemove}
				>
					<DeleteIcon />
				</IconButton>
			}
		>
			<ListItemAvatar>
				<Avatar>
					<FormatListBulletedIcon />
				</Avatar>
			</ListItemAvatar>
			<Link href={`${id}`}>
				<ListItemText
					primary={title}
					secondary={description}
				/>
			</Link>
		</ListItem>
	);
};

export default TodoItem;
