import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { FormEvent } from 'react';
import styles from '../styles/Form.module.css';
import {
	AppState,
	useAppSelector,
} from '../store/store';
import { addTodo } from '../store/reducer';
import Todos from '../components/Todos/Todos';
import { GetStaticProps } from 'next';


const js = () => {
	// const dispatch = useAppDispatch();
	const [title, setTitle] = React.useState<string>('');
	const [desc, setDesc] = React.useState<string>('');
	const handleAddTodo = (event: FormEvent) => {
		event.preventDefault();
		// dispatch(
		// 	addTodo({ title: title, description: desc })
		// );
	};
	const handleChangeTitle = (e: any) => {
		if (e.target.value !== ' ') {
			setTitle(e.target.value);
		}
	};
	const handleChangeDesc = (e: any) => {
		if (e.target.value !== ' ') {
			setDesc(e.target.value);
		}
	};
	return (
		<>
			<form
				className={styles.form}
				onSubmit={handleAddTodo}
			>
				<div className={styles.flex}>
					<div>
						<TextField
							id='filled-basic'
							label='Заголовка задач'
							onChange={handleChangeTitle}
						/>
					</div>
					<div>
						<TextField
							label='Описание задач'
							onChange={handleChangeDesc}
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
			<Todos />
		</>
	);
};

export default js;
