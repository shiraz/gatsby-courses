import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Images from '../examples/Images'

const blog = () => {
  return (
    <Layout>
      hello from blog page<Link to='/'>back home</Link>
      <Images />
    </Layout>
  )
}

export default blog
