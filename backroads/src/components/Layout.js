import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./layout.css"
import "../sass/layout.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
