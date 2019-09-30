import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="Hero">
        <div className="HeroGroup">
        <h1>Learn to <br />design and code React Apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
        <img src='/images/logo-sketch.png' width="50" />
          <img src='/images/logo-figma.png' width="50" />
          <img src='/images/logo-studio.png' width="50" />
          <img src='/images/logo-framer.png' width="50" />
          <img src='/images/logo-react.png' width="50" />
          <img src='/images/logo-swift.png' width="50" />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card 
            title="Design System"
            text="10 sections"
            image='/images/wallpaper.jpg' />
          <Card 
            title="React for Designers"
            text="12 sections"
            image='/images/wallpaper2.jpg' />
          <Card 
            title="Sound Design"
            text="5 sections"
            image='/images/wallpaper3.jpg' />
          <Card 
            title="ARKit 2"
            text="10 sections"
            image='/images/wallpaper4.jpg' />
        </div>
      </div>
      <Section
        image={require('../../static/images/wallpaper2.jpg')}
        logo={require('../../static/images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using
        React and the most efficient libraries to get
        your site/product online. Get familiar with
        components, Grid CSS, animations, interactions,
        dynamic data with Contentful and deploying your
        site with Netlify."
       />
    </div>

    {/* <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    
  </Layout>
)

export default IndexPage
