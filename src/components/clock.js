import React from 'react';
import styled from 'styled-components';
import numToWordsMap from './util/mapping';
import Checkbox from "./checkbox";

class ClockComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      answer: 0,
      input: '',
      system: '',
      simpleNumbersToggle: true,
      multipleChoiceToggle: false,
      sinoToggle: false,
      pureToggle: false,
      multipleChoiceArr: [],
      checkedRadio: null
    }
  }

  // componentDidMount() {
  //   this.generateProblem();
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.simpleNumbersToggle !== prevState.simpleNumbersToggle) {
  //     this.generateProblem();
  //   }
  // }

  generateProblem = () => {
    const system = (Math.floor(Math.random() * 2) + 1) === 1 ? 'sino' : 'pure';
    const x = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 99) + 1;
    const y = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * (10 - x)) + 1 : Math.floor(Math.random() * (100 - x)) + 1;
    const answer = this.convertNumToWord((x + y), system);
    let incorrect1;
    let incorrect2;
    let incorrect3;
    let tempArr;

    if (this.state.simpleNumbersToggle === false) {
      const shuffledArr = this.shuffleArray(Object.entries(numToWordsMap).filter(num => this.convertNumToWord(parseInt(num[0]), system) !== answer));
      [incorrect1, incorrect2, incorrect3] = [...shuffledArr];
      incorrect1 = incorrect1[1][system];
      incorrect2 = incorrect2[1][system];
      incorrect3 = incorrect3[1][system];
      tempArr = this.shuffleArray([answer, incorrect1, incorrect2, incorrect3]);
    } else if (this.state.simpleNumbersToggle === true) {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const shuffledArr = this.shuffleArray((arr.filter(num => this.convertNumToWord(num, system) !== answer)));
      [incorrect1, incorrect2, incorrect3] = [...shuffledArr];
      incorrect1 = this.convertNumToWord(incorrect1, system);
      incorrect2 = this.convertNumToWord(incorrect2, system);
      incorrect3 = this.convertNumToWord(incorrect3, system);
      tempArr = this.shuffleArray([answer, incorrect1, incorrect2, incorrect3]);
    };

    this.setState({
      x,
      y,
      answer,
      system,
      input: '',
      response: '',
      multipleChoiceArr: tempArr,
      checkedRadio: null,
    });
  }

  // shuffleArray = (array) => {
  //   let currentIndex = array.length, temporaryValue, randomIndex;
  //   while (0 !== currentIndex) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   return array;
  // }

  // validate = (e) => {
  //   e.preventDefault();
  //   if (this.state.input === this.state.answer) {
  //     this.setState({
  //       response: 'correct'
  //     })
  //   } else {
  //     this.setState({
  //       response: 'wrong'
  //     })
  //   }
  // }

  // handleSingleInput = (e) => {
  //   this.setState({
  //     input: e.target.value
  //   })
  // }

  // handleMultipleChoice = (e) => {
  //   this.setState({
  //     input: e.target.value,
  //     checkedRadio: e.target.value
  //   })
  // }

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
    } else {
      this.setState({
        [e.target.id]: e.target.checked
      })
    }
  }

  // convertNumToWord = (num, sys) => {
  //   if (numToWordsMap[num] !== undefined) {
  //     return numToWordsMap[num][sys];
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <h2>I AM THE CLOCK</h2>
        <Settings
          sinoToggle={this.state.sinoToggle}
          pureToggle={this.state.pureToggle}
        >
          <div className="reference-container">
            <div className="toggle">
              <label htmlFor="sinoToggle">
                <p className="sino">Sino<span className="mobileHide">-Korean</span></p>
                <Checkbox
                  id="sinoToggle"
                  checked={this.state.sinoToggle}
                  onChange={this.handleCheckboxChange}
                />
              </label>
            </div>
            <div className="toggle">
              <label htmlFor="pureToggle">
                <p className="pure">Pure <span className="mobileHide">Korean</span></p>
                <Checkbox
                  id="pureToggle"
                  checked={this.state.pureToggle}
                  onChange={this.handleCheckboxChange}
                />
              </label>
            </div>
          </div>
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
        </Settings>
      </React.Fragment>
    )
  }
}

const Nav = styled.nav`
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

const Calculator = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  label {
    margin-top: 25px;
    display: block;
    text-align: center;
    font-weight: 600;
  }
  input[type="text"] {
    width: 100%;
    border: 3px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 0;
    text-align: center;
    font-size: 32px;
  }
  form p {
    text-align: center;
    font-size: 32px;
    margin: 16px 0;
  }
  label[for="input"] { 
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  @media (max-width: 599px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    margin-top: 30px;
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 60px;
  border-bottom: 3px solid black;
  span {
    font-size: 48px;
  }
  .numberX {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
  }
  .numberY {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: end;
  }
  .operation {
    width: 25px;
    height: 25px;
    grid-row: 2 / 3;
  }
`;

const MultipleChoice = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 10px;
    margin-bottom: 26px;
  }
  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    display: inline-block;
    padding: 5px;
    border: 3px solid #000;
    border-radius: 5px;
    margin-top: 0;
    font-size: 24px;
    transition: all 0.2s;
  }
  input[type="radio"]:checked+label {
    background-color: #5E3399;
    border-color: #5E3399;
    color: white;
  }
  label:hover {
    background-color: #8353c6;
    border-color: #8353c6;
    color: white;
  }
  input[type="submit"] {
    grid-column: 0 / 4;
  }
  @media (max-width: 599px) {
    width: auto;
    .container {
      grid-gap: 5px;
      grid-template-columns: 1fr 1fr;
    }
    label {
      font-size: 18px;
      padding: 15px 10px;
    }
  }
`;

const Settings = styled.section`
  position: relative;
  .options-container, .reference-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .toggle {
    margin-top: 5px;
  }
  label {
    position: relative;
    padding: 5px;
    width: 175px;
    display: inline-block;
  }
  p {
    display: inline-block;
    font-weight: 600;
    margin: 0;
  }
  p.simpleNumbers {
    color: ${props => (props.simpleNumbersToggle === true ? 'white' : 'black')}
  }
  p.multipleChoice {
    color: ${props => (props.multipleChoiceToggle === true ? 'white' : 'black')}
  }
  p.sino {
    color: ${props => (props.sinoToggle === true ? 'white' : 'black')}
  }
  p.pure {
    color: ${props => (props.pureToggle === true ? 'white' : 'black')}
  }
  @media (max-width: 599px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    width: 100%;
    margin-top: 0;
    label {
      width: 100%;
      padding: 10px;
    }
    .toggle {
      width: auto;
      margin-top: 5px;
      width: 100%;
    }
    .reference-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5px;
    }
  }
  .mobileBlock {
    display: inline-block;
  }
  .mobileHide {
    display: none;
  }
`;

const ListContainer = styled.div`
  position: absolute;
  top: 175px;
  right: 0;
  display: flex;
  span {
    font-weight: 600;
  }
  @media (max-width: 599px) {
    top: 155px;
    left: 0;
    width: 100%;
    justify-content: space-between;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  width: ${props => (props.digits === 'single' ? '55px' : '75px')};
  margin-right: ${props => (props.digits === 'single' ? '45px' : '0')};
  li {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledButton = styled.button`
  background: ${props => (props.theme === "purple" ? "#5E3399" : "white")};
  color: ${props => (props.theme === "purple" ? "white" : "#5E3399")};;
  border: 3px solid #5E3399;
  border-radius: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  transition: all 0.2s;
  font-weight: 600;
  &:hover {
    background: #5E3399;
    border: 3px solid #5E3399;
    color: white;
  }
  @media (max-width: 599px) {
    padding: 10px 5px;
  }
`;

export const Wrapper = styled.div`
  width: 200px;
  margin: ${props => (props.margin === 'auto' ? '0 auto' : '0')}
`;

export default ClockComponent;