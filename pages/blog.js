import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import { useState } from 'react'
const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/blogs").then((a) => {
            return a.json();
        }).then((data) => {
            setBlogs(data)
        })
    }, [])
    return (
        <div className="blogs">
            <main className={styles.main}>
                {/* heading */}
                <h1>Popular Blogs</h1>

                {/* using map function to display all the blogs */}
                {blogs.map((blogitem) => {
                    return <div key={blogitem.title}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                            <h2>{blogitem.title}</h2>
                        </Link>
                        <p className={styles.blogitemp}>
                            {/* display the first 20 words and then ...*/}
                            {blogitem.content.split(" ").slice(0, 20).join(" ")}...
                        </p>
                    </div>
                })}

            </main>
        </div>
    )
}

export default Blog