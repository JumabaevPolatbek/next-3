import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../redux/hook';
import { useRouter } from 'next/router';
import ModalTodo from '../components/Modal';
import CustomizedModal from '../components/CustomModal';

export default function IdTodo() {
	const todos = useAppSelector(
		(state) => state['Todo-List'].todos
	);
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	const todo = todos.find(
		({ id }) => id === +(router.query.id as string)
	);
	console.log(todo);
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color='text.secondary'
					gutterBottom
				>
					To Do List
				</Typography>
				<Typography
					variant='h5'
					component='div'
				>
					{todo?.title}
				</Typography>
				<Typography
					sx={{ mb: 1.5 }}
					color='text.secondary'
				></Typography>
				<Typography variant='body2'>
					{todo?.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size='small'
					onClick={handleOpen}
					variant='contained'
				>
					Remove
				</Button>
				<CustomizedModal
					open={open}
					setOpen={setOpen}
				>
					<ModalTodo
						title={todo?.title}
						id={+(router.query.id as string)}
						setOpen={setOpen}
					/>
				</CustomizedModal>
			</CardActions>
		</Card>
	);
}
