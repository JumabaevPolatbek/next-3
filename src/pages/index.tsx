import styles from '../styles/Form.module.css';
import Todos from '../components/Todos/Todos';
import { Button, TextField } from '@mui/material';
import getStore, { useAppDispatch } from '../store/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Todo } from '../store/reducer';
import { addTodo } from '../store/reducer';
import {
	GetServerSideProps,
	GetStaticProps,
	NextPage,
} from 'next/types';

type TodoList = {
	id: number;
	title: string;
	description: string;
};

// export const getStaticProps: GetStaticProps<{
// 	todos: TodoList[];
// }> = () => {
// 	const store = getStore();
// 	return {
// 		props: {
// 			todos: store.getState()['Todo-List'].todos,
// 		},
// 		revalidate: 10,
// 	};
// };

export const getServerSideProps: GetServerSideProps<{
	list: TodoList[];
}> = async () => {
	const store = getStore();
	console.log(store.getState())
	return {
		props: {
			list: store.getState()['Todo-List'].todos,
		},
	};
};

const Home: NextPage<{ todos: TodoList[] }> = ({
	todos,
}) => {
	console.log('todo array', todos);
	const dispatch = useAppDispatch();
	const { handleSubmit, register } =
		useForm<Omit<Todo, 'id'>>();
	const formSubmit: SubmitHandler<
		Omit<Todo, 'id'>
	> = async (data) =>
		await dispatch(
			addTodo({
				title: data.title,
				description: data.description,
			})
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
			<Todos list={todos} />
		</>
	);
};
// Home.getInitialProps = async (ctx) => {};
export default Home;
