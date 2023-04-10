import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useAppDispatch } from '../redux/hook';
import { removeTodo } from '../redux/reducer';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
type Props = {
	title?: string;
	id: number;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalTodo: React.FC<Props> = ({
	title,
	id,
	setOpen,
}) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const handleRemove = () => {
		dispatch(removeTodo(id));
		toast.success(`${title} todo deleted`, {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
		setTimeout(() => {
			router.push('/');
		}, 1500);
	};
	const handleOpen = () => {
		setOpen(false);
	};
	return (
		<Box>
			<Typography
				id='modal-modal-title'
				variant='h6'
				component='h2'
			>
				Remove Todo {title}
			</Typography>
			<Button
				variant='contained'
				color='success'
				onClick={handleRemove}
			>
				Yes
			</Button>
			<Button
				variant='contained'
				color='error'
				onClick={handleOpen}
			>
				No
			</Button>
		</Box>
	);
};

export default ModalTodo;
