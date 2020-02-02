import React from 'react'
import { Link } from 'gatsby'
 
import { Layout } from '../components/Layout/layout'


export default () => (
    <Layout>
        <div>
            <Link to="/post">Post Page</Link>
        </div>
    </Layout>
)
