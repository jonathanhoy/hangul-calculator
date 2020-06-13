import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CalculatorComponent from "../components/calculator"
import styled from "styled-components"


const Paragraph = styled.p`
  font-family: 'Helvetica', 'Arial', 'Sans Serif';
`;

const IndexPage = () => (
  <Layout>
    <SEO title="한글 Calculator" />
    <CalculatorComponent/>
  </Layout>
)

export default IndexPage
