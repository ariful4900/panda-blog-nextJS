import * as fs from 'fs';
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item) => (
          <div className={styles.blogItem} key={item.title}>
            <Link href={`/blogpost/${item.slug}`} legacyBehavior>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.metadesc.slice(0, 50) + "..."}</p>
          </div>
        ))}
      </main>
    </div>
  );
};


export async function getStaticProps() {
  let data = await fs.promises.readdir("blogData")
  let myfile;
  let allBlogs = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile('blogdata/'+item, 'utf-8');
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {
      allBlogs,
    },
  };
}

export default Blog;
