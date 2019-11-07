import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import styles from './layout.css'

const Layout = ( {children} ) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
