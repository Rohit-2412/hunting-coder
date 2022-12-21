import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hunting Coder</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hunting Coder
                </h1>

                <p className={styles.description}>
                    A blog for hunting coders by a hunting coder
                </p>

                <div className="blogs">
                    <h2>Popular Blogs</h2>
                    <div className="blogItem">
                        <h3>How to learn JavaScript in 2022?</h3>
                        <p>JavaScript is the language used to design logic for the web</p>
                    </div>
                    <div className="blogItem">
                        <h3>How to learn JavaScript in 2022?</h3>
                        <p>JavaScript is the language used to design logic for the web</p>
                    </div>
                    <div className="blogItem">
                        <h3>How to learn JavaScript in 2022?</h3>
                        <p>JavaScript is the language used to design logic for the web</p>
                    </div>
                </div>
            </main>

        </div>
    )
}