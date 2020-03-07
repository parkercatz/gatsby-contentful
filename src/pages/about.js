import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h2>
        <Link to="/contact">Got to Contact Page</Link>
      </h2>
    </Layout>
  )
}
export default AboutPage
