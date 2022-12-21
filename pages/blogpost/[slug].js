import React from 'react'
import styles from '../../styles/Blogpost.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
const slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((blog) => {
            return blog.json();
        }).then((parsed) => {
            setBlog(parsed)
        })
    }, [router.isReady])
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {/* use logical and (&&) to check if the blog is loaded or not */}
                <h1>{blog && blog.title}</h1>
                <p>{blog && blog.content}</p>
            </main>
        </div >
    )
}

export default slug