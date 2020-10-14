import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Calendar from "../components/calendar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Calendar />
    <h1>Index Page</h1>
  </Layout>
)

export default IndexPage
