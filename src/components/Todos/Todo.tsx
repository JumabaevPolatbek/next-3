import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { Todo } from '../../store/reducer';

const Todo: React.FC<Todo> = ({
	title,
	description,
	id,
}) => {
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	return (
		<ListItem
			key={id}
			disableGutters
			secondaryAction={
				<IconButton aria-label='comment'>
					{/* <CommentIcon /> */}
				</IconButton>
			}
		>
			<ListItemText primary={title} />
			<ListItemText primary={description} />
		</ListItem>
	);
};

export default Todo;
