import styled from 'styled-components';

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

export default Settings;