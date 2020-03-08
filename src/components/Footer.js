import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyle from "./Footer.module.scss"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyle.footer}>
      <p>created by {data.site.siteMetadata.author} , ©2019</p>
    </footer>
  )
}

export default Footer
