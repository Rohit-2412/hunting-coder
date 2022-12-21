import React from 'react'
import styles from '../../styles/Blogpost.module.css'
import { useRouter } from 'next/router'
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <hr />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt debitis odit animi, et non ipsam quidem ducimus repudiandae suscipit, alias obcaecati expedita?</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus atque cum est, dolores neque quos veritatis, quibusdam unde tempore cumque beatae sed laboriosam reiciendis aut? Tenetur sapiente vero quod in similique saepe beatae autem, repellat nam reiciendis, itaque, quas quae ullam sunt totam illum magnam? Quis iste adipisci, deserunt a sit nemo cupiditate similique repellat nisi? Est quaerat dolore, omnis rerum illum mollitia reprehenderit sint optio consectetur impedit dolorum nulla consequuntur deleniti, veritatis facere assumenda expedita incidunt? Vel aspernatur perspiciatis reiciendis nam, sunt aliquid illo esse porro repellendus amet ipsa explicabo dolor praesentium velit optio magnam quas iusto. Numquam.
            </main>
        </div >
    )
}

export default slug