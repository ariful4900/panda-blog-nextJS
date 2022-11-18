import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert(json)
        setName("")
        setEmail("")
        setPhone("")
        setDesc("")
      });
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Contact US</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Form</legend>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              className={styles.input}
              id="name"
              name="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={handleChange}
            />
            <div id="emailHelp" className={styles.formText}>
              We will never share your email with anyone else.
            </div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formLabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.input}
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className={styles.formText}>
              We will never share your email with anyone else.
            </div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone
            </label>
            <input
              type="phone"
              name="phone"
              className={styles.input}
              id="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles.formLabel}>
              Description
            </label>
            <br />
            <textarea
              className={styles.input}
              id="desc"
              onChange={handleChange}
              style={{ height: "100px" }}
              name="desc"
            >
              {desc}
            </textarea>
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
