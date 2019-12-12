import React from 'react'
import { Link } from 'gatsby'

import About from '../components/Home/About'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Services from '../components/Home/Services'
import SimleHero from '../components/SimpleHero'

export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title='continue exploring'
        info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis.'
      >
        <Link to='/tours' className='btn-white'>
          explore tours
        </Link>
      </Banner>
    </SimleHero>
    <About />
    <Services />
  </Layout>
)
