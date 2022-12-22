import React from 'react'
import styles from '../../styles/Blogpost.module.css'
// import { useRouter } from 'next/router'
import { useState } from 'react'
import * as fs from 'fs';
const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)
    // const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((blog) => {
    //         return blog.json();
    //     }).then((parsed) => {
    //         setBlog(parsed) -
    //     })
    // }, [router.isReady])
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

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');

    return {
        props: {
            myBlog: JSON.parse(myBlog)
        }
    }
}

export default Slug