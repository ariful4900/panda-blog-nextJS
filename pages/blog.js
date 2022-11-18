import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.data.allBlogs);


  console.log(props)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item) => (
          <div className={styles.blogItem} key={item.title}>
            <Link href={`/blogpost/${item.slug}`} legacyBehavior>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.content.slice(0, 50) + "..."}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
 let data = await fetch("http://localhost:3000/api/blogs")
    let allBlogs = await data.json()
  return {
    props: {
      data: {allBlogs}
    }, // will be passed to the page component as props
  }
}

export default Blog;
