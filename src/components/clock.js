import React from 'react';
import styled from 'styled-components';
import { minuteToStrMap, hourToHangulMap, minuteToHangulMap } from './util/timeMapping';
import Checkbox from "./checkbox";

class ClockComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      ansHour: '',
      ansMinute: '',
      hangulHour: '',
      hangulMinute: '',
      sinoToggle: false,
      pureToggle: false,
      response: '',
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  generateProblem = () => {
    const hour = (Math.floor(Math.random() * 12) + 1).toString();
    const minute = this.convertMinuteToStr(Math.floor(Math.random() * 59 ));
    const hangulHour = this.convertNumToHangul(hour, "hour");
    const hangulMinute = this.convertNumToHangul(minute, "minute");
    this.setState({
      hour,
      hangulHour,
      minute,
      hangulMinute,
      response: '',
      ansHour: '',
      ansMinute: '',
    });
  }

  convertMinuteToStr = (min) => {
    if (minuteToStrMap[min] !== undefined) {
      return minuteToStrMap[min].output;
    } else {
      return min.toString();
    }
  }

  validate = (e) => {
    e.preventDefault();
    if (this.state.ansHour === this.state.hangulHour && this.state.ansMinute === this.state.hangulMinute) {
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

  convertNumToHangul = (num, time) => {
    if (hourToHangulMap[num] !== undefined && time === "hour") {
      return hourToHangulMap[num];
    } else if (minuteToHangulMap[num] !== undefined && time === "minute") {
      return minuteToHangulMap[num];
    }
  }

  render() {
    return (
      <React.Fragment>
        <Clock>
          <Wrapper>
            <ClockField>
              <p><span>{this.state.hour}</span><span>:</span><span>{this.state.minute}</span></p>
            </ClockField>
            <form action="" onSubmit={this.validate}>
              <div className="inputGroup">
                <input aria-label={`Type hour here`} className="hour" type="text" id="ansHour" name="ansHour" onChange={this.handleChange} value={this.state.ansHour} placeholder="" />
                <label htmlFor="ansHour">시</label>
              </div>
              <div className="inputGroup">
                <input disabled={this.state.minute === "00" ? true : false} aria-label={`Type minute here`} className={this.state.minute === "00" ? "minute disabled" : "minute"} type="text" id="ansMinute" name="ansMinute" onChange={this.handleChange} value={this.state.ansMinute} placeholder="" />
                <label htmlFor="ansMinute" class={this.state.minute === "00" ? "minute disabled" : "minute"}>분</label>
              </div>
              <div className="responseContainer">
                {this.state.response === '' && <p>&nbsp;</p>}
                {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
                {this.state.response === 'wrong' && <p class="wrong"><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.hangulHour} 시 {this.state.hangulMinute} {this.state.hangulMinute !== "" && "분"}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
              </div>
              <div className="submitContainer">
                <StyledButton type="submit" theme="purple">Check</StyledButton>
              </div>
            </form>
          </Wrapper>
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
                  <li><span>10</span><span>십</span></li>
                </List>
              </ListContainer>
            )
          }
          {
            this.state.pureToggle === true && (
              <ListContainer>
                <List digits="single">
                  <li><span>1</span><span>하나 / 한</span></li>
                  <li><span>2</span><span>둘 / 두</span></li>
                  <li><span>3</span><span>셋 / 세</span></li>
                  <li><span>4</span><span>넷 / 네</span></li>
                  <li><span>5</span><span>다섯</span></li>
                  <li><span>6</span><span>여섯</span></li>
                  <li><span>7</span><span>일곱</span></li>
                  <li><span>8</span><span>여덟</span></li>
                  <li><span>9</span><span>아홉</span></li>
                  <li><span>10</span><span>열</span></li>
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
  margin-top: 30px;
  form {
    display: flex;
    flex-wrap: wrap;
    .inputGroup {
      display: flex;
      align-items: center;
      label {
        font-weight: 600;
        margin-left: 8px;
        font-size: 24px;
      }
      input {
        border: 3px solid black;
        border-radius: 5px;
        padding: 5px;
        margin: 10px 0;
        text-align: center;
        font-size: 18px;
      }
      input.hour {
        width: 60px;
      }
      input.minute {
        width: 74px;
        margin-left: 8px;
      }
      input.disabled {
        border: 3px solid lightgrey;
      }
      label.disabled {
        color: lightgrey;
      }
    }
    p {
      text-align: center;
      font-size: 32px;
      margin: 16px 0;
    }
    .submitContainer {
      width: 100%;
    }
    .responseContainer {
      text-align: center;
      width: 100%;
      .wrong {
        font-size: 22px;
      }
    }
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
    margin-top: 10px;
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const ClockField = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  p {
    margin: 0;
    text-align: center;
    font-size: 48px;
    padding: 16px;
    padding-right: 18px;
    letter-spacing: 2px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    span:nth-child(1) {
      text-align: right;
    }
    span:nth-child(3) {
      text-align: left;
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
  top: 95px;
  right: 10px;
  display: flex;
  span {
    font-weight: 600;
  }
  @media (max-width: 599px) {
    top: 60px;
    left: 10px;
    width: 100%;
    justify-content: space-between;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  li {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
      padding-right: 5px;
    }
    span:nth-child(2) {
      padding-left: 5px;
    }
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