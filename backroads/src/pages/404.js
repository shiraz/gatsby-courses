import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Banner from '../components/Banner'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styles from '../css/error.module.css'

export default function error() {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
