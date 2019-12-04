import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimleHero>
  </Layout>
)
