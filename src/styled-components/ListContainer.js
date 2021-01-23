import styled from 'styled-components';

const ListContainer = styled.div`
  position: absolute;
  top: ${props => (props.topValueDesktop)};
  right: ${props => (props.isVisible === true ? '0' : '-200px')};
  opacity: ${props => (props.isVisible === true ? '1' : '0')};
  display: flex;
  background: gainsboro;
  padding: 10px;
  width: 175px;
  justify-content: space-between;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  span {
    font-weight: 600;
  }
  ul {
    margin: 0;
  }
  @media (max-width: 599px) {
    top: ${props => (props.topValueMobile)};
    left: ${props => (props.isVisible === true ? '0' : '-200px')};;
    width: 100%;
    justify-content: space-between;
  }
`;

export { ListContainer };