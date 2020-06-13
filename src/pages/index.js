import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

import Calculator from "../components/Calculator"

const Paragraph = styled.p`
  font-family: 'Helvetica', 'Arial', 'Sans Serif';
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Calculator/>
  </Layout>
)

export default IndexPage
