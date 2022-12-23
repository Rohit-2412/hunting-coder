import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
    }
    const [blog, setBlog] = useState(props.myBlog);


    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}


        </main>
    </div>;
};

export async function getStaticPaths() {
    let allBlogs = await fs.promises.readdir(`blogdata`)
    allBlogs = allBlogs.map((item) => {
        return { params: { slug: item.split(".")[0] } }
    })
    // console.log(allb)
    return {
        paths: allBlogs,
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;


    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Slug;
