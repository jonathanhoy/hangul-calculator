import React from 'react';
import styled from 'styled-components';
import words from './mapping';

import Checkbox from './Checkbox';
import Cheatsheet from './Cheatsheet';
import svg from '../images/noun_Math_538141.svg';
 
class CalculatorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      operation: 0,
      x: 0,
      y: 0,
      answer: 0,
      input: '',
      system: '',
      simpleNumbersToggle: true,
      multipleChoiceToggle: false,
      multipleChoiceArr: [],
      checkedRadio: null
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  generateProblem = () => {
    const operation = this.state.simpleNumbersToggle === true ? 1 : (Math.floor(Math.random() * 2) + 1);
    const sys = (Math.floor(Math.random() * 2) + 1);
    const x = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 10) + 1;
    const y = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * (10 - x)) + 1 : Math.floor(Math.random() * 10) + 1;

    let answer;
    let system;
    let z;
    let incorrect1;
    let incorrect2;
    let incorrect3;
    let tempArr;

    switch (sys) {
      case 1:
        system = 'sino';
        break;
      case 2:
        system = 'pure';
        break;
    };
    switch(operation) {
      case 1:
        z = x + y;
        answer = this.convertNumToWord(z, system)
        break;
      case 2:
        z = x * y;
        answer = this.convertNumToWord(z, system)
        break;
    };

    if (this.state.simpleNumbersToggle === false) {
      const shuffledArr = this.shuffleArray(Object.entries(words).filter(num => this.convertNumToWord(parseInt(num[0]), system) !== answer));
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
      operation,
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

  handleCheckboxChange = event => this.setState({ [event.target.id]: event.target.checked })

  convertNumToWord = (num, sys) => {
    if (words[num] !== undefined) {
      return words[num][sys];
    }
  }

  render() {
    return (
      <MainContainer>
        <Cheatsheet/>
        <Calculator>
          <Wrapper>
            <Mathfield operation={this.state.operation}>
              <span className="numberX">{this.convertNumToWord(this.state.x, this.state.system)}</span>
              <span className="numberY">{this.convertNumToWord(this.state.y, this.state.system)} </span>
              <span className="operation"><img src={svg} alt={`A${this.state.operation === 1 ? 'n addition' : ' multiplication'} icon`}/></span>
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
                <Wrapper>
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
        <Settings>
          <Toggles simpleNumbersToggle={this.state.simpleNumbersToggle} multipleChoiceToggle={this.state.multipleChoiceToggle}>
            <div className="toggleContainer">
              <label>
                <p className="simpleNumbers">Simple numbers</p>
                <Checkbox
                  id="simpleNumbersToggle"
                  checked={this.state.simpleNumbersToggle}
                  onChange={this.handleCheckboxChange}
                />
              </label>
            </div>
            <div className="toggleContainer">
              <label>
                <p className="multipleChoice">Multiple choice</p>
                <Checkbox
                  id="multipleChoiceToggle"
                  checked={this.state.multipleChoiceToggle}
                  onChange={this.handleCheckboxChange}
                />
              </label>
            </div>
          </Toggles>
        </Settings>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 500px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 10px;
  }
`;

const Settings = styled.section`
  justify-self: end;
  display: flex;
  justify-content: flex-end;
  p {
    margin-right: 10px;
    display: inline-block;
  }
  p, span {
    font-weight: 600;
  }
  @media (max-width: 500px) {
    grid-row: 1 / 2;
    width: 100%;
    margin: 5px 0;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

const Toggles = styled.div`
  text-align: right;
  @media (max-width: 500px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .toggleContainer {
      width: auto;
      position: relative;
      margin-top: 5px;
      width: 100%;
      p {
        margin: 0;
        padding: 10px;
      }
      p.simpleNumbers {
        color: ${props => (props.simpleNumbersToggle === true ? 'white' : '#5e3399')}
      }
      p.multipleChoice {
        color: ${props => (props.multipleChoiceToggle === true ? 'white' : '#5e3399')}
      }
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
  }
`;

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 60px 60px;
  border-bottom: 3px solid black;
  margin-bottom: 25px;
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
  img {
    transform: ${props => (props.operation === 1 ? "rotate(0deg)" : "rotate(45deg)")};
    transition: all 0.2s;
  }
`;

const MultipleChoice = styled.div`
  width: 300px;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px;
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
    padding: 20px;
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
    }
    label {
      font-size: 18px;
      padding: 15px;
    }
  }
`;

const StyledButton = styled.button`
  background: ${props => (props.theme === "purple" ? "#8353c6" : "white")};
  color: ${props => (props.theme === "purple" ? "white" : "#8353c6")};;
  border: 3px solid #8353c6;
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
  margin: 0 auto;
`;

export default CalculatorComponent;