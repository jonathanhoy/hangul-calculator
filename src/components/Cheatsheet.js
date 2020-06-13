import React from 'react';
import styled from 'styled-components';

const Cheatsheet = () => (
  <CheatsheetContainer>
    <div>
      <p>Sino<span className="mobileHide">-Korean</span></p>
      <List>
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
    </div>
    <div>
      <p>Pure <span className="mobileHide">Korean</span></p>
      <List>
        <li><span>1</span><span>하나</span></li>
        <li><span>2</span><span>둘</span></li>
        <li><span>3</span><span>셋</span></li>
        <li><span>4</span><span>넷</span></li>
        <li><span>5</span><span>다섯</span></li>
        <li><span>6</span><span>여섯</span></li>
        <li><span>7</span><span>일곱</span></li>
        <li><span>8</span><span>여덟</span></li>
        <li><span>9</span><span>아홉</span></li>
        <li><span>10</span><span>열</span></li>
      </List>
    </div>
  </CheatsheetContainer>
)

const CheatsheetContainer = styled.section`
  position: relative;
  p, span {
    font-weight: 600;
  }
  p {
    color: grey;
    transition: all 0.2s;
    display: inline-block;
    &:hover {
      color: #5e3399;
    }
    &:hover + ul {
      display: block;
    }
  }
  @media (max-width: 500px) {
    grid-row: 2 / 3;
    margin: 15px 10px;
    display: flex;
    justify-content: space-around;

    .mobileBlock {
      display: inline-block;
    }
    .mobileHide {
      display: none;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  padding-left: 0;
  list-style: none;
  width: 60px;
  display: none;
  li {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Cheatsheet;