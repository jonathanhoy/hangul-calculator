import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import Calculator from "../components/Calculator.js"

const Paragraph = styled.p`
  font-family: 'Helvetica', 'Arial', 'Sans Serif';
`;

const IndexPage = () => (
  <Layout>
    <SEO title="한글 Calculator" />
    <Calculator/>
  </Layout>
)

export default IndexPage
