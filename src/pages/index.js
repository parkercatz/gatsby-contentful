import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Ryo, a full-stack developer living in beatiful Phiadelphia</h2>
      <Link to="/contact">Go to Contact Page</Link>
    </Layout>
  )
}
export default IndexPage
