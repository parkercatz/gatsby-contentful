import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/reset.scss"
import LayoutStyle from "./Layout.module.scss"

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
