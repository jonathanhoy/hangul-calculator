import React from 'react';
import styled from 'styled-components';
import numToWordsMap from './util/mapping';
import Checkbox from './checkbox';
import Cheatsheet from './Cheatsheet';
import svg from '../images/noun_Math_538141.svg';
import { fireOverviewSwal, fireFeaturesSwal } from './util/swal';
 
class CalculatorComponent extends React.Component {
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

  componentDidMount() {
    this.generateProblem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.simpleNumbersToggle !== prevState.simpleNumbersToggle) {
      this.generateProblem();
    }
  }

  generateProblem = () => {
    const system = (Math.floor(Math.random() * 2) + 1) === 1 ? 'sino' : 'pure';
    const x = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 99) + 1;
    const y = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * (10 - x)) + 1 : Math.floor(Math.random() * (100 - x)) + 1;
    const answer = this.convertNumToWord((x+y), system);
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

  shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  validate = (e) => {
    e.preventDefault();
    if (this.state.input === this.state.answer) {
      this.setState({
        response: 'correct'
      })
    } else {
      this.setState({
        response: 'wrong'
      })
    } 
  }

  handleSingleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleMultipleChoice = (e) => {
    this.setState({
      input: e.target.value,
      checkedRadio: e.target.value
    })
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
    } else {
      this.setState({
        [e.target.id]: e.target.checked
      })
    }
  }

  convertNumToWord = (num, sys) => {
    if (numToWordsMap[num] !== undefined) {
      return numToWordsMap[num][sys];
    }
  }

  // fireOverviewSwal = () => {
  //   swal(
  //     <div>
  //       <h2>App overview</h2>
  //       <p>The purpose of this app is to help with memorizing Korean numbers in both the Sino and Pure/Native number systems.</p>
  //       <p>Understanding that each system is used in different situations, the app's objective is simply to practice memorization.</p>
  //       <p>Good luck in your studies!</p>
  //       <p>&copy; Jonathan {currentyear}</p>
  //     </div>
  //   )
  // }

  // fireFeaturesSwal = () => {
  //   swal(
  //     <div>
  //       <h3>Features</h3>
  //       <p>By keeping the 'Simple numbers' setting checked, you will be limited to problems in the range of 1-10. Unchecking 'Simple numbers' will allow problems in the range of 1-100.</p>
  //       <p>The 'Multiple choice' setting changes the answer format should you not have a Korean keyboard, or to provide a different challenge.</p>
  //       <p>You can click/tap the Sino and Pure buttons for a reference of each number system.</p>
  //       <p>Good luck in your studies!</p>
  //       <p>&copy; Jonathan {currentyear}</p>
  //     </div>
  //   )
  // }

  render() {
    return (
      <MainContainer>
        <Nav>
          <button className="nav-overview" onClick={fireOverviewSwal}>
            <p>Overview</p>
          </button>
          <button className="nav-features" onClick={fireFeaturesSwal}><p>Features</p></button>
        </Nav>
        <Calculator>
          <Wrapper>
            <Mathfield>
              <span className="numberX">{this.convertNumToWord(this.state.x, this.state.system)}</span>
              <span className="numberY">{this.convertNumToWord(this.state.y, this.state.system)} </span>
              <span className="operation"><img src={svg} alt="An addition icon"/></span>
            </Mathfield>
          </Wrapper>
          <form action="" onSubmit={this.validate}>
            {
              this.state.multipleChoiceToggle === false &&
              (
                <Wrapper>
                  <label htmlFor="input">Answer</label>
                  <input type="text" id="input" name="input" onChange={this.handleSingleInput} value={this.state.input} placeholder="Answer"/>
                  {this.state.response === '' && <p>&nbsp;</p>}
                  {this.state.response === 'correct' && <p>맞아요! 🎉</p> }
                  {this.state.response === 'wrong' && <p>❗{this.state.answer}❗</p>}
                  <StyledButton type="submit" theme="purple">Check</StyledButton>
                </Wrapper>
              )
            }
            {
              this.state.multipleChoiceToggle === true &&
              <MultipleChoice>
                <div className="container">
                  <input type="radio" name="multipleChoice" id={this.state.multipleChoiceArr[0]} onClick={this.handleMultipleChoice} value={this.state.multipleChoiceArr[0]} checked={this.state.checkedRadio == this.state.multipleChoiceArr[0]}/>
                  <label htmlFor={this.state.multipleChoiceArr[0]}>
                    {this.state.multipleChoiceArr[0]}
                  </label>

                  <input type="radio" name="multipleChoice" id={this.state.multipleChoiceArr[1]} onClick={this.handleMultipleChoice} value={this.state.multipleChoiceArr[1]} checked={this.state.checkedRadio == this.state.multipleChoiceArr[1]}/>
                  <label htmlFor={this.state.multipleChoiceArr[1]}>
                    {this.state.multipleChoiceArr[1]}
                  </label>
                  
                  <input type="radio" name="multipleChoice" id={this.state.multipleChoiceArr[2]} onClick={this.handleMultipleChoice} value={this.state.multipleChoiceArr[2]} checked={this.state.checkedRadio == this.state.multipleChoiceArr[2]}/>
                  <label htmlFor={this.state.multipleChoiceArr[2]}>
                    {this.state.multipleChoiceArr[2]}
                  </label>

                  <input type="radio" name="multipleChoice" id={this.state.multipleChoiceArr[3]} onClick={this.handleMultipleChoice} value={this.state.multipleChoiceArr[3]} checked={this.state.checkedRadio == this.state.multipleChoiceArr[3]}/>
                  <label htmlFor={this.state.multipleChoiceArr[3]}>
                    {this.state.multipleChoiceArr[3]}
                  </label>
                </div>
                <Wrapper margin="auto">
                  {this.state.response === '' && <p>&nbsp;</p>}
                  {this.state.response === 'correct' && <p>맞아요! 🎉</p>}
                  {this.state.response === 'wrong' && <p>❗{this.state.answer}❗</p>}
                  <StyledButton type="submit" theme="purple">Check</StyledButton>
                </Wrapper>
              </MultipleChoice>
            }
          </form>
          <Wrapper>
            <StyledButton onClick={this.generateProblem}>Next</StyledButton>
          </Wrapper>
        </Calculator>
        <Settings
          simpleNumbersToggle={this.state.simpleNumbersToggle}
          multipleChoiceToggle={this.state.multipleChoiceToggle}
          sinoToggle={this.state.sinoToggle}
          pureToggle={this.state.pureToggle}
        >
          <div className="toggle">
            <label htmlFor="simpleNumbersToggle">
              <p className="simpleNumbers">Simple numbers</p>
              <Checkbox
                id="simpleNumbersToggle"
                checked={this.state.simpleNumbersToggle}
                onChange={this.handleCheckboxChange}
              />
            </label>
          </div>
          <div className="toggle">
            <label htmlFor="multipleChoiceToggle">
              <p className="multipleChoice">Multiple choice</p>
              <Checkbox
                id="multipleChoiceToggle"
                checked={this.state.multipleChoiceToggle}
                onChange={this.handleCheckboxChange}
              />
            </label>
          </div>
          <div className="toggle">
            <label htmlFor="sinoToggle">
              <p className="sino">Sino-Korean</p>
              <Checkbox
                id="sinoToggle"
                checked={this.state.sinoToggle}
                onChange={this.handleCheckboxChange}
              />
            </label>
          </div>
          <div className="toggle">
            <label htmlFor="pureToggle">
              <p className="pure">Pure Korean</p>
              <Checkbox
                id="pureToggle"
                checked={this.state.pureToggle}
                onChange={this.handleCheckboxChange}
              />
            </label>
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
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-column-gap: 10px;
  }
`;

const Nav = styled.nav`
  margin: 20px 0;
  .nav-overview, .nav-features {
    margin-top: 15px;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: 600;
    font-size: 18px;
    display: block;
    /* margin-bottom: 10px; */
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
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
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
  @media (max-width: 500px) {
    grid-row: 1 / 2;
    width: 100%;
    .toggle {
      width: auto;
      margin-top: 5px;
      width: 100%;
    }
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
  @media (max-width: 500px) {
    top: 50px;
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
  @media (max-width: 500px) {
    padding: 10px 5px;
  }
`;

export const Wrapper = styled.div`
  width: 200px;
  margin: ${props => (props.margin === 'auto' ? '0 auto' : '0')}
`;

export default CalculatorComponent;