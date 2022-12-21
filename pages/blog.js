import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const Blog = () => {
    return (
        <div className="blogs">
            <main className={styles.main}>
                <h1>Popular Blogs</h1>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-javascript'}>
                        <h2>How to learn JavaScript in 2022?</h2>
                    </Link>
                    <p>JavaScript is the language used to design logic for the web</p>
                </div>

            </main>
        </div>
    )
}

export default Blog