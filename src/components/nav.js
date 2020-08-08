import React from 'react';
import styled from 'styled-components';
import { fireOverviewSwal, fireFeaturesSwal } from './util/swal';

class Nav extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <StyledNav>
        <div className="nav-inner-container">
          <button className="nav-overview" onClick={fireOverviewSwal}>
            <p>Overview</p>
          </button>
          <button className="nav-features" onClick={fireFeaturesSwal}><p>Features</p></button>
        </div>
      </StyledNav>
    )
  }
};

export default Nav;

const StyledNav = styled.nav`
  margin: 25px 0;
  .nav-inner-container {
    background: Gainsboro;
    padding: 25px;
    border-radius: 25px;
    display: inline-block;
  }
  .nav-overview, .nav-features {
    margin: 5px 0;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: 600;
    font-size: 18px;
    display: block;
    padding: 0;
    p {
      margin: 0;
      text-align: left;
      color: rgba(0,0,0,0.8);
      transition: all 0.2s;
    }
    p:hover {
      color: #5e3399;
    }
  }
  @media (max-width: 599px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    margin-bottom: 0;
    margin-top: 10px;
    .nav-overview, .nav-features {
      margin: 0;
      margin-bottom: 5px;
    }
    .nav-inner-container {
      background: Gainsboro;
      padding: 15px;
      border-radius: 15px;
      margin-bottom: 5px;
    }
  }
`;