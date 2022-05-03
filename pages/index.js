import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>#title</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to #title</h1>

				<p className={styles.description}>#description</p>

				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>#1 &rarr;</h3>
						<p>#1 paragraph</p>
					</div>

					<div className={styles.card}>
						<h3>#2 &rarr;</h3>
						<p>#2 paragraph</p>
					</div>

					<div className={styles.card}>
						<h3>#3 &rarr;</h3>
						<p>#3 paragraph</p>
					</div>

					<div className={styles.card}>
						<h3>#4 &rarr;</h3>
						<p>#4 paragraph</p>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>Project by #Members</footer>
		</div>
	);
}
