import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import styles2 from "../styles/Home2.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          .mySpan {
            color: red;
            text-shadow: 1px 1px 3px blue;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder || Ariful Islam</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="next, hunting coder blog, hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={"mySpan"}>&lt;Hunting Code/&gt;</span>
        </h1>
        <Image
          className={styles.myImg}
          src={"/coder.jpg"}
          width={237}
          height={157}
          alt="Coder Image"
        />

       

        <div className={"blogs"}>
          <h2 className={styles.h2}>Latest Blog</h2>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn javascript in 2022?</h3>
            <p>Javascript is the language used to design for web</p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn javascript in 2022?</h3>
            <p className={styles.p}>Javascript is the language used to design for web</p>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.h3}>How to learn javascript in 2022?</h3>
            <p>Javascript is the language used to design for web</p>
          </div>
        </div>
      </main>
    </div>
  );
}
