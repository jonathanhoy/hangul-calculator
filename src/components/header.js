import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  h1 {
    margin: 0;
    color: white;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        한글 계산기 - Hangul Calculator
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
