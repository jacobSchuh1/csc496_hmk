import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'



const AboutPage = () => {
  return (
    /*<main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>*/
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage