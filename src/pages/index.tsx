import styles from '../styles/Form.module.css';
import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
	useAppDispatch,
	useAppSelector,
} from '../redux/hook';
import { Todo } from '../redux/types';
import { addTodo } from '../redux/reducer';
import SSRTodos from '../components/SSRTodos';

function Home() {
	const dispatch = useAppDispatch();
	const { handleSubmit, register } =
		useForm<Omit<Todo, 'id'>>();
	const formSubmit: SubmitHandler<
		Omit<Todo, 'id'>
	> = async (data) => await dispatch(addTodo(data));
	const todos = useAppSelector(
		(state) => state['Todo-List'].todos
	);
	return (
		<>
			<form
				className={styles.form}
				onSubmit={handleSubmit(formSubmit)}
			>
				<div className={styles.flex}>
					<div>
						<TextField
							id='filled-basic'
							label='Заголовка задач'
							{...register('title')}
						/>
					</div>
					<div>
						<TextField
							label='Описание задач'
							{...register('description')}
						/>
					</div>
				</div>
				<div style={{ padding: '5px 5px' }}>
					<Button
						variant='contained'
						type='submit'
					>
						Добавить
					</Button>
				</div>
			</form>
			<SSRTodos />
		</>
	);
}
export default Home;
