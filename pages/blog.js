import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import { useState } from 'react'
import * as fs from 'fs';
import { deepStrictEqual } from 'assert';
const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs)

    // useEffect(() => {
    //     fetch("http://localhost:3000/api/blogs").then((a) => {
    //         return a.json();
    //     }).then((data) => {
    //         setBlogs(data)
    //     })
    // }, [])
    return (
        <div className="blogs">
            <main className={styles.main}>
                {/* heading */}
                {/* <h1>Popular Blogs</h1> */}

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

export async function getStaticProps(context) {
    let data = await fs.promises.readdir('blogdata')
    let myFile;
    let allBlogs = [];

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
        allBlogs.push(JSON.parse(myFile))
    }

    return {
        props: {
            allBlogs
        }
    }
}
export default Blog