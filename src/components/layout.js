/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
      <Footer/>
    </SiteContainer>
  )
}

const SiteContainer = styled.div`
  height: 100vh;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  @media (max-width: 500px) {
    padding-bottom: 0;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
