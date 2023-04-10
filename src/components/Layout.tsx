import React from 'react';
import styles from '../styles/Form.module.css';
const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className={styles.container}>{children}</div>
	);
};

export default Layout;
