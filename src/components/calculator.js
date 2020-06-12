import React from 'react';
import styled from 'styled-components';
import words from './mapping';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      operation: 0,
      x: 0,
      y: 0,
      answer: 0,
      input: '',
      system: ''
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  generateProblem = () => {
    const operation = (Math.floor(Math.random() * 2) + 1);
    const sys = (Math.floor(Math.random() * 2) + 1);
    /* const x = (Math.floor(Math.random() * 10) + 1) */
    const x = 1;
    /* const y = (Math.floor(Math.random() * 10) + 1) */
    const y = 2;
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
      <StyledCalculator>
        <Wrapper>
          <Mathfield>
            <span className="field1">{this.convertNumToWord(this.state.x, this.state.system)}</span>
            <span className="field2">{this.convertNumToWord(this.state.y, this.state.system)} </span>
            <span className="field3">{this.returnOp()}</span>
          </Mathfield>
          <form action="" onSubmit={this.validate}>
            <label htmlFor="input">Answer</label>
            <input type="text" id="input" name="input" onChange={this.handleChange} value={this.state.input}/>
            {this.state.response === 'correct' ? <p>CORRECT!</p> : <p>&nbsp;</p>}
            {this.state.response === 'wrong' && <p>Wrong... {this.state.answer}!</p>}
            <StyledButton type="submit" theme="purple">Check</StyledButton>
          </form>
          <div>
          <StyledButton onClick={this.generateProblem}>Next</StyledButton>
          </div>
        </Wrapper>
      </StyledCalculator>
    )
  }
}

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 50px 50px;
  border-bottom: 3px solid black;
  .field1 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
    font-size: 32px;
  }
  .field2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: end;
    font-size: 32px;
  }
  .field3 {
    grid-row: 2 / 3;
    font-size: 32px;
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
  }
  input {
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 0;
    text-align: center;
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