import React from "react";
import styles from "./App.module.css";

export default function App() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form>
        <p className={styles.fieldTitle}>Nhập email:</p>
        <input
          name="email"
          type="text"
          className={styles.input}
        />
        <p className={styles.fieldTitle}>Nhập password:</p>
        <input
          name="password"
          type="password"
          className={styles.input}
        />
        <br />
        <label>
          <input
            className={styles.checkbox}
            name="isRead"
            type="checkbox" /> I read and accept the privacy policy:
        </label>

        <button className={styles.btnSubmit}>Submit nè</button>
      </form>
    </div>
  );
}