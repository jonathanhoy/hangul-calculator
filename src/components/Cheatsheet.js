import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

class Cheatsheet extends React.Component {
  constructor() {
    super();
    this.state = {
      sinoToggle: false,
      pureToggle: false,
    }
  }

  handleCheckboxChange = (e) => {
    if (e.target.id === 'sinoToggle') {
      this.setState({
        pureToggle: false,
        [e.target.id]: e.target.checked,
      })
    } else if (e.target.id === 'pureToggle') {
      this.setState({
        sinoToggle: false,
        [e.target.id]: e.target.checked,
      })
    }
  }

  render() {
    return (
      <CheatsheetContainer sinoToggle={this.state.sinoToggle} pureToggle={this.state.pureToggle}>
        <div className="legendContainer">
          <label htmlFor="sinoToggle">
            <p className="sinoToggle">Sino<span className="mobileHide">-Korean</span></p>
            <Checkbox
              id="sinoToggle"
              checked={this.state.sinoToggle}
              onChange={this.handleCheckboxChange}
              nonResponsive={true}
            />
          </label>
          {
            this.state.sinoToggle === true && (
              <ListContainer>
                <List digits="single">
                  <li><span>1</span><span>일</span></li>
                  <li><span>2</span><span>이</span></li>
                  <li><span>3</span><span>삼</span></li>
                  <li><span>4</span><span>사</span></li>
                  <li><span>5</span><span>오</span></li>
                  <li><span>6</span><span>육</span></li>
                  <li><span>7</span><span>칠</span></li>
                  <li><span>8</span><span>팔</span></li>
                  <li><span>9</span><span>구</span></li>
                </List>
                <List>
                  <li><span>10</span><span>십</span></li>
                  <li><span>20</span><span>이십</span></li>
                  <li><span>30</span><span>삼십</span></li>
                  <li><span>40</span><span>사십</span></li>
                  <li><span>50</span><span>오십</span></li>
                  <li><span>60</span><span>육십</span></li>
                  <li><span>70</span><span>칠십</span></li>
                  <li><span>80</span><span>팔십</span></li>
                  <li><span>90</span><span>구십</span></li>
                  <li><span>100</span><span>백</span></li>
                </List>
              </ListContainer>
            )
          }
        </div>
        <div className="legendContainer">
          <label htmlFor="pureToggle">
            <p className="pureToggle">Pure <span className="mobileHide">Korean</span></p>
            <Checkbox
              id="pureToggle"
              checked={this.state.pureToggle}
              onChange={this.handleCheckboxChange}
              nonResponsive={true}
            />
          </label>
          {
            this.state.pureToggle === true && (
              <ListContainer>
                <List digits="single">
                  <li><span>1</span><span>하나</span></li>
                  <li><span>2</span><span>둘</span></li>
                  <li><span>3</span><span>셋</span></li>
                  <li><span>4</span><span>넷</span></li>
                  <li><span>5</span><span>다섯</span></li>
                  <li><span>6</span><span>여섯</span></li>
                  <li><span>7</span><span>일곱</span></li>
                  <li><span>8</span><span>여덟</span></li>
                  <li><span>9</span><span>아홉</span></li>
                </List>
                <List>
                  <li><span>10</span><span>열</span></li>
                  <li><span>20</span><span>스물</span></li>
                  <li><span>30</span><span>서른</span></li>
                  <li><span>40</span><span>마흔</span></li>
                  <li><span>50</span><span>쉰</span></li>
                  <li><span>60</span><span>예순</span></li>
                  <li><span>70</span><span>일흔</span></li>
                  <li><span>80</span><span>여든</span></li>
                  <li><span>90</span><span>아흔</span></li>
                  <li><span>100</span><span>백</span></li>
                </List>
              </ListContainer>
            )
          }
        </div>
      </CheatsheetContainer>
    )
  }
}

const CheatsheetContainer = styled.section`
  position: relative;
  .legendContainer:last-child {
    margin-top: 25px;
  }
  label {
    position: relative;
    padding: 10px;
  }
  label:last-child {
    margin-top: 35px;
  }
  p, span {
    font-weight: 600;
    margin-bottom: 0;
  }
  p {
    color: #5e3399;
    transition: all 0.2s;
    display: inline-block;
  }
  p.sinoToggle {
    color: ${props => (props.sinoToggle === true ? 'white' : '#5e3399')}
  }
  p.pureToggle {
    color: ${props => (props.pureToggle === true ? 'white' : '#5e3399')}
  }
  @media (max-width: 500px) {
    .legendContainer:last-child {
      margin-top: 0;
    }
    grid-row: 2 / 3;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    .mobileBlock {
      display: inline-block;
    }
    .mobileHide {
      display: none;
    }
  }
  label {
    padding: 10px 15px;
  }
  label:last-child {
    margin-top: 0;
  }
`;

const ListContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  display: flex;
  @media (max-width: 500px) {
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  width: ${props => (props.digits === 'single' ? '55px' : '75px')};
  margin-right: ${props => (props.digits === 'single' ? '30px' : '0')};
  li {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    width: ${props => (props.digits === 'single' ? '50px' : '70px')};
    margin-right: ${props => (props.digits === 'single' ? '15px' : '0')};
  }
`;

export default Cheatsheet;