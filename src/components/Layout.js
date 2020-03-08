import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/reset.scss"
import LayoutStyle from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyle.container}>
      <div className={LayoutStyle.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
