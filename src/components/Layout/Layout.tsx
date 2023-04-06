import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../../styles/Home.module.css';
import Typography from '@mui/material/Typography';
type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<Typography
					variant='h3'
					component='h3'
				>
					Список задач
				</Typography>
			</div>
			{children}
		</main>
	);
};

export default Layout;
