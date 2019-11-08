import React from "react"
// import "./navbar.css"
import styles from "./navbar.module.css"
console.log(styles)

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>i'm navbar</h1>
      <div className={styles.links}>i'm navbar link</div>
    </div>
  )
}

export default Navbar
