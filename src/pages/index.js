import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm m1nt1a, a full-stack developer living in beatiful Phiadelphia</h2>
      <Link to="/contact">Go to Contact Page</Link>
    </Layout>
  )
}
export default IndexPage
