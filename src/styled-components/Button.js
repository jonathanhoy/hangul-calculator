import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.theme === "purple" ? "#5E3399" : "white")};
  color: ${props => (props.theme === "purple" ? "white" : "#5E3399")};;
  border: 3px solid #5E3399;
  border-radius: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    background: #5E3399;
    border: 3px solid #5E3399;
    color: white;
  }
  @media (max-width: 599px) {
    padding: 10px 5px;
    margin: 5px 0;
  }
`;

export default Button;