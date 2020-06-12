import React from 'react';
import styled from 'styled-components';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const operation = ['addition', 'subtraction', 'multiplication', 'division']

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: 25px 25px;
  grid-template-rows: 25px 25px;
  .field1 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
  }
  .field2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: end;
  }
  .field3 {
    grid-row: 2 / 3;
  }
`;

const StyledCalculator = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  background: none;
  border: 2px solid black;
  border-radius: 5px;
  width: 100px;
  margin: 10px 0;
`;

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      op: 0,
      x: 0,
      y: 0,
      answer: 0,
      input: ''
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  generateProblem = () => {
    const op = (Math.floor(Math.random() * 2) + 1)
    const x = (Math.floor(Math.random() * 10) + 1)
    const y = (Math.floor(Math.random() * 10) + 1)
    let answer;
    switch(op) {
      case 1:
        answer = x + y;
        break;
      case 2:
        answer = x * y;
        break;
    }
    this.setState({
      op,
      x,
      y,
      answer,
      input: '',
      response: ''
    })
  }

  validate = (e) => {
    e.preventDefault();
    if (parseInt(this.state.input) === this.state.answer) {
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
    if (this.state.op === 1) {
      return '+'
    } else if (this.state.op === 2) {
      return 'x'
    }
  }

  render() {
    return (
      <StyledCalculator>
        <Mathfield>
          <span className="field1">{this.state.x}</span>
          <span className="field2">{this.state.y}</span>
          <span className="field3">{this.returnOp()}</span>
        </Mathfield>
        <label htmlFor="answer">Answer</label>
        <input type="text" id="input" name="input" onChange={this.handleChange} value={this.state.input}/>
        <StyledButton onClick={this.validate}>Check</StyledButton>
        <div>
        <StyledButton onClick={this.generateProblem}>Next</StyledButton>
        {this.state.response === 'correct' && <p>CORRECT!</p>}
        {this.state.response === 'wrong' && <p>Wrong... {this.state.answer}!</p>}
        </div>
      </StyledCalculator>
    )
  }
}

export default Calculator;