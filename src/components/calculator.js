import React from 'react';
import styled from 'styled-components';
import words from './mapping';

import Checkbox from './Checkbox';
import Cheatsheet from './Cheatsheet';
import svg from '../images/noun_Math_538141.svg';
 
class Calculator extends React.Component {
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
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  generateProblem = () => {
    const operation = this.state.simpleNumbersToggle === false ? (Math.floor(Math.random() * 2) + 1) : 1;
    const sys = (Math.floor(Math.random() * 2) + 1);
    const x = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * 10) + 1;
    const y = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * (10 - x)) + 1 : Math.floor(Math.random() * 10) + 1;
    let answer;
    let system;
    let z;
    switch (sys) {
      case 1:
        system = 'sino';
        break;
      case 2:
        system = 'pure';
        break;
    }
    switch(operation) {
      case 1:
        z = x + y;
        answer = this.convertNumToWord(z, system)
        break;
      case 2:
        z = x * y;
        answer = this.convertNumToWord(z, system)
        break;
    }
    this.setState({
      operation,
      x,
      y,
      answer,
      system,
      input: '',
      response: ''
    })
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

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleCheckboxChange = event => this.setState({ simpleNumbersToggle: event.target.checked })

  returnOp = () => {
    if (this.state.operation === 1) {
      return '+'
    } else if (this.state.operation === 2) {
      return 'x'
    }
  }

  convertNumToWord = (num, sys) => {
    if (words[num] !== undefined) {
      return words[num][sys];
    }
  }

  render() {
    return (
      <>
        <Settings>
          <Cheatsheet/>
          <div>
            <label>
              <p>Simple numbers</p>
              <Checkbox
                checked={this.state.simpleNumbersToggle}
                onChange={this.handleCheckboxChange}
              />
            </label>
          </div>
        </Settings>
        <StyledCalculator>
          <Wrapper>
            <Mathfield operation={this.state.operation}>
              <span className="numberX">{this.convertNumToWord(this.state.x, this.state.system)}</span>
              <span className="numberY">{this.convertNumToWord(this.state.y, this.state.system)} </span>
              <span className="operation"><img src={svg} alt={`A${this.state.operation === 1 ? 'n addition' : ' multiplication'} icon`}/></span>
            </Mathfield>
            <form action="" onSubmit={this.validate}>
              <label htmlFor="input">Answer</label>
              <input type="text" id="input" name="input" onChange={this.handleChange} value={this.state.input}/>
              {this.state.response === '' && <p>&nbsp;</p>}
              {this.state.response === 'correct' && <p>맞아요! 🎉</p> }
              {this.state.response === 'wrong' && <p>❗{this.state.answer}❗</p>}
              <StyledButton type="submit" theme="purple">Check</StyledButton>
            </form>
            <div>
            <StyledButton onClick={this.generateProblem}>Next</StyledButton>
            </div>
          </Wrapper>
        </StyledCalculator>
      </>
    )
  }
}

const Settings = styled.section`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  p {
    margin-right: 10px;
    display: inline-block;
  }
  p, span {
    font-weight: 600;
  }
`;

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  img {
    transform: ${props => (props.operation === 1 ? "rotate(0deg)" : "rotate(45deg)")};
    transition: all 0.2s;
  }
`;

const StyledCalculator = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    margin-top: 25px;
    display: block;
    text-align: center;
    font-weight: 600;
  }
  input {
    width: 100%;
    border: 2px solid black;
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
`;

const StyledButton = styled.button`
  background: ${props => (props.theme === "purple" ? "#8353c6" : "white")};
  color: ${props => (props.theme === "purple" ? "white" : "#8353c6")};;
  border: 2px solid #8353c6;
  border-radius: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  transition: all 0.2s;
  font-weight: 600;
  &:hover {
    background: #5e3399;
    border: 2px solid #5e3399;
    color: white;
  }
`;

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto
`;

export default Calculator;