import * as fs from "fs";
import Link from "next/link";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);
  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count+2}`);
    setCount(count+2)
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          { blogs.map((item) => (
            <div className={styles.blogItem} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.metadesc.slice(0, 50) + "..."}</p>
              <Link href={`/blogpost/${item.slug}`} legacyBehavior>
                <button className={styles.btn}>Read more</button>
              </Link>
            </div>
          ))}
        </InfiniteScroll>
       
      </main>
    </div>
  );
};

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogData");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < 2; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: {
      allBlogs, allCount
    },
  };
}

export default Blog;
