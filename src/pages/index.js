import React from "react"
import styled from 'styled-components'

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CalculatorComponent from "../components/calculator"
import ClockComponent from "../components/clock"
import { fireOverviewSwal } from '../components/util/swal';


class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      viewCalculator: true,
      viewClock: false
    }
  }

  viewCalculator = () => {
    this.setState({
      viewCalculator: true,
      viewClock: false,
    })
  }

  viewClock = () => {
    this.setState({
      viewClock: true,
      viewCalculator: false,
    })
  }

  render() {
    return (
      <>
        <Layout viewCalculator={this.state.viewCalculator} viewClock={this.state.viewClock}>
          <MainGrid>
            <SEO title={this.state.viewCalculator && "한글 Calculator" || this.state.viewClock && "한글 Clock"} />
            <StyledNav>
              <ul className="nav-inner-container">
                <li>
                  <button className="nav-overview" onClick={fireOverviewSwal}>
                    <p>Overview</p>
                  </button>
                </li>
                <li>
                  <button className="nav-features" onClick={this.viewCalculator}>
                    <p>Calculator</p>
                  </button>
                </li>
                <li>
                  <button className="nav-features" onClick={this.viewClock}>
                    <p>Clock <span className="nav-new-feature">new</span></p>
                  </button>
                </li>
              </ul>
            </StyledNav>
            {this.state.viewCalculator && <CalculatorComponent />}
            {this.state.viewClock && <ClockComponent />}
          </MainGrid>
        </Layout>
      </>
    )
  }
}

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  @media (max-width: 599px) {
    padding: 0 .5rem 1.45rem;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 599px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-column-gap: 10px;
  }
`;

const StyledNav = styled.nav`
  margin: 25px 0;
  ul {
    list-style: none;
    padding: 0;
  }
  .nav-new-feature {
    text-transform: uppercase;
    color: #5E3399;
    font-size: 10px;
    vertical-align: super;
    line-height: 0;
  }
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
    grid-column: 1 / 3;
    margin-bottom: 0;
    margin-top: 10px;
    .nav-overview, .nav-features {
      margin: 0;
    }
    .nav-inner-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      background: Gainsboro;
      padding: 10px 15px;
      border-radius: 15px;
      margin-bottom: 5px;
    }
  }
`;

export default IndexPage
