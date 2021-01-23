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
  @media (max-width: 599px) {
    .mobileBlock {
      display: block;
    }
    .mobileHide {
      display: none;
    }
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
      <div>
        <h1>
          <span className="mobileBlock">{this.props.viewCalculator && '한글 계산기'}{this.props.viewClock && '한글 시계'}</span> <span className="mobileHide">-</span> <span className="mobileHide">{this.props.viewCalculator && 'Hangul Calculator'}{this.props.viewClock && 'Hangul Clock'}</span>
        </h1>
      </div>
    </StyledHeader>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
