import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import Todos from '../components/Todos/Todos';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { wrapper } from '../store/store';



export default function Home() {
	return (
		<>
			
			<div className={styles.grid}>
				<Typography
					variant='h5'
					component='div'
				>
					Добавить задач без{' '}
					<Link
						href='/no-js'
						className={styles.logo}
					>
						Javascript
					</Link>
				</Typography>
				<Typography
					variant='h5'
					component='div'
				>
					Добавить задач с{' '}
					<Link
						href='/js'
						className={styles.logo}
					>
						Javascript
					</Link>
				</Typography>
			</div>
		</>
	);
}

