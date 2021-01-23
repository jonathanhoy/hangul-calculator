import styled from 'styled-components';

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
  @media (max-width: 599px) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    margin-top: 20px;
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
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
`;

const MultipleChoice = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
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
    padding: 5px;
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
  @media (max-width: 599px) {
    width: auto;
    .container {
      grid-gap: 5px;
      grid-template-columns: 1fr 1fr;
    }
    label {
      font-size: 18px;
      padding: 15px 10px;
    }
  }
`;

export { Calculator, Mathfield, MultipleChoice };