import Head from 'next/head';
import React, { useState } from 'react';
import styles from '../../styles/BlogPost.module.css';

const Slug = (props) => {

    const [blog, setBlog]=useState(props.myBlog)
    
    return (
        <div className={styles.container}>
            <Head>
                <title>{blog.title}</title>
            </Head>
             <main className={styles.main}>
           <h1>{blog?.title}</h1>
           <div> 
            <p>{blog?.content}</p>
           </div>
           </main>
        </div>
    );
};

export async function getServerSideProps(context) {
  
    const {slug}=context.query;
       const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
       let myBlog = await data.json();

  
    return {
      props: {myBlog}, // will be passed to the page component as props
    }
  }

export default Slug;