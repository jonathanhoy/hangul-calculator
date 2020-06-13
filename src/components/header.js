import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: #5e3399;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    text-align: center;
  }
  h1 {
    margin: 0;
    color: white;
  }
  @media (max-width: 500px) {
    .mobileBlock {
      display: inline-block;
    }
    .mobileHide {
      display: none;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <span className="mobileBlock">한글 계산기</span> <span className="mobileHide">-</span> <span className="mobileBlock">Hangul Calculator</span>
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
