import Head from 'next/head';
import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';
import { Breadcrumb } from '@/components/molecules/Breadcrumb/Breadcrumb';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Layout.module.scss';

function Layout({ children }) {
	const router = useRouter();
	const [Path, setPath] = useState([]);

	useEffect(() => {
		const pathArr = router.asPath.split('/');
		setPath(pathArr);
	}, [router]);

	return (
		<div>
			<Head>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={clsx(styles.layout, router.asPath === '/dev' && styles.whiteLayout)}>
				<Header whiteHeader={router.asPath === '/dev'} />

				<section className={clsx(styles.content, router.asPath !== '/' && styles.subContent)}>
					{router.asPath !== '/' && <Breadcrumb data={Path} />}
					{children}
				</section>

				<Footer whiteFooter={router.asPath === '/dev'} />
			</div>
		</div>
	);
}

export default Layout;
