import React from 'react';
import { minuteToStrMap, hourToHangulMap, minuteToHangulMap } from './util/timeMapping';
import Checkbox from './checkbox';
import Settings from '../styled-components/Settings';
import Button from '../styled-components/Button';
import Wrapper from '../styled-components/Wrapper';
import { ListContainer, ClockList } from '../styled-components/List';
import { Clock, ClockField } from '../styled-components/clock';

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
                <label htmlFor="ansMinute" className={this.state.minute === "00" ? "minute disabled" : "minute"}>분</label>
              </div>
              <div className="responseContainer">
                {this.state.response === '' && <p>&nbsp;</p>}
                {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
                {this.state.response === 'wrong' && <p class="wrong"><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.hangulHour} 시 {this.state.hangulMinute} {this.state.hangulMinute !== "" && "분"}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
              </div>
              <div className="submitContainer">
                <Button type="submit" theme="purple">Check</Button>
              </div>
            </form>
          </Wrapper>
          <Wrapper>
            <Button onClick={this.generateProblem}>Next</Button>
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
          <ListContainer 
            isVisible={this.state.sinoToggle} 
            topValueDesktop={'95px'} 
            topValueMobile={'60px'}
          >
            <ClockList digits="single">
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
            </ClockList>
          </ListContainer>
          <ListContainer 
            isVisible={this.state.pureToggle} 
            topValueDesktop={'95px'} 
            topValueMobile={'60px'}
          >
            <ClockList digits="single">
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
            </ClockList>
          </ListContainer>
        </Settings>
      </React.Fragment>
    )
  }
};

export default ClockComponent;