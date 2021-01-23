import React from 'react';
import numToWordsMap from './util/mapping';
import Checkbox from './checkbox';
import Settings from '../styled-components/Settings';
import Button from '../styled-components/Button';
import Wrapper from '../styled-components/Wrapper';
import { ListContainer, CalculatorList } from '../styled-components/List';
import { Calculator, Mathfield, MultipleChoice } from '../styled-components/calculator';
 
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

  render() {
    return (
      <React.Fragment>
        <Calculator>
          <Wrapper>
            <Mathfield>
              <span className="numberX">{this.convertNumToWord(this.state.x, this.state.system)}</span>
              <span className="operation">&#x2b;</span>
              <span className="numberY">{this.convertNumToWord(this.state.y, this.state.system)} </span>
            </Mathfield>
          </Wrapper>
          <form action="" onSubmit={this.validate}>
            {
              this.state.multipleChoiceToggle === false &&
              (
                <Wrapper>
                  <label htmlFor="input">Answer</label>
                  <input aria-label={`Type answer here`} type="text" id="input" name="input" onChange={this.handleSingleInput} value={this.state.input} placeholder="Answer"/>
                  {this.state.response === '' && <p>&nbsp;</p>}
                  {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p> }
                  {this.state.response === 'wrong' && <p><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.answer}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
                  <Button type="submit" theme="purple">Check</Button>
                </Wrapper>
              )
            }
            {
              this.state.multipleChoiceToggle === true &&
              <MultipleChoice>
                <div className="container">
                  {
                    this.state.multipleChoiceArr.map((item) => {
                      return (
                        <>
                          <input aria-label={`Input for ${item}`} key={item} type="radio" name="multipleChoice" id={item} onClick={this.handleMultipleChoice} value={item} checked={this.state.checkedRadio === item} />
                          <label htmlFor={item}>
                            {item}
                          </label>
                        </>
                      )
                    })
                  }
                </div>
                <Wrapper margin="auto">
                  {this.state.response === '' && <p>&nbsp;</p>}
                  {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
                  {this.state.response === 'wrong' && <p><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.answer}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
                  <Button type="submit" theme="purple">Check</Button>
                </Wrapper>
              </MultipleChoice>
            }
          </form>
          <Wrapper>
            <Button onClick={this.generateProblem}>Next</Button>
          </Wrapper>
        </Calculator>
        <Settings
          simpleNumbersToggle={this.state.simpleNumbersToggle}
          multipleChoiceToggle={this.state.multipleChoiceToggle}
          sinoToggle={this.state.sinoToggle}
          pureToggle={this.state.pureToggle}
        >
          <div className="options-container">
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
          </div>
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
            topValueDesktop={'175px'} 
            topValueMobile={'153px'}
          >
            <CalculatorList digits="single">
              <li><span>1</span><span>일</span></li>
              <li><span>2</span><span>이</span></li>
              <li><span>3</span><span>삼</span></li>
              <li><span>4</span><span>사</span></li>
              <li><span>5</span><span>오</span></li>
              <li><span>6</span><span>육</span></li>
              <li><span>7</span><span>칠</span></li>
              <li><span>8</span><span>팔</span></li>
              <li><span>9</span><span>구</span></li>
            </CalculatorList>
            <CalculatorList>
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
            </CalculatorList>
          </ListContainer>
          <ListContainer 
            isVisible={this.state.pureToggle} 
            topValueDesktop={'175px'} 
            topValueMobile={'153px'}
          >
            <CalculatorList digits="single">
              <li><span>1</span><span>하나</span></li>
              <li><span>2</span><span>둘</span></li>
              <li><span>3</span><span>셋</span></li>
              <li><span>4</span><span>넷</span></li>
              <li><span>5</span><span>다섯</span></li>
              <li><span>6</span><span>여섯</span></li>
              <li><span>7</span><span>일곱</span></li>
              <li><span>8</span><span>여덟</span></li>
              <li><span>9</span><span>아홉</span></li>
            </CalculatorList>
            <CalculatorList>
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
            </CalculatorList>
          </ListContainer>
        </Settings>
      </React.Fragment>
    )
  }
};

export default CalculatorComponent;