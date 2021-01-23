import styled from 'styled-components';

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
    grid-row: 2 / 4;
    margin-top: 5px;
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

export { Clock, ClockField };