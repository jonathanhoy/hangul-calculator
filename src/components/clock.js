import React from 'react';
import styled from 'styled-components';
import { hourToStrMap, minuteToStrMap } from './util/timeMapping';
import Checkbox from "./checkbox";

class ClockComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
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

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.simpleNumbersToggle !== prevState.simpleNumbersToggle) {
  //     this.generateProblem();
  //   }
  // }

  generateProblem = () => {
    // const system = (Math.floor(Math.random() * 2) + 1) === 1 ? 'sino' : 'pure';
    const hour = (Math.floor(Math.random() * 12) + 1).toString();
    const minute = this.convertMinuteToStr(Math.floor(Math.random() * 59));
    console.log(hour, ":", minute, (typeof hour), (typeof minute));

    this.setState({
      hour,
      minute,
      // answer,
      // system,
      // input: '',
      // response: '',
      // multipleChoiceArr: tempArr,
      // checkedRadio: null,
    });
  }

  convertMinuteToStr = (min) => {
    if (minuteToStrMap[min] !== undefined) {
      return minuteToStrMap[min].output;
    } else {
      return min.toString();
    }
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

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

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
        <Clock>
          <Wrapper>
            <ClockField>
              <p><span>{this.state.hour}</span>:<span>{this.state.minute}</span></p>
            </ClockField>
          </Wrapper>
          <form action="" onSubmit={this.validate}>
            <Wrapper>
              <div>
                <input aria-label={`Type hour here`} type="text" id="ansHour" name="ansHour" onChange={this.handleChange} value={this.state.input} placeholder="" />
                <label htmlFor="ansHour">시</label>
              </div>
              {this.state.response === '' && <p>&nbsp;</p>}
              {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
              {this.state.response === 'wrong' && <p><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.answer}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
              <StyledButton type="submit" theme="purple">Check</StyledButton>
            </Wrapper>
          </form>
          <Wrapper>
            <StyledButton onClick={this.generateProblem}>Next</StyledButton>
          </Wrapper>
        </Clock>
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

const Clock = styled.section`
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

const ClockField = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  p {
    margin: 0;
    text-align: right;
    font-size: 48px;
    padding: 16px;
    padding-right: 18px;
    letter-spacing: 2px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold; 
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