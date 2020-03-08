import React from "react"
import Layout from "../components/Layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h2>
        <a
          href="https://twitter.com/@takabaud"
          target="_blank"
          rel="noopener noreferrer"
        >
          @takabaud
        </a>
      </h2>
    </Layout>
  )
}
export default ContactPage
