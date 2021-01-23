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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  li {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
	li:last-child {
		margin-bottom: 0;
	}
`;

const CalculatorList = styled(List)`
	width: ${props => (props.digits === 'single' ? '55px' : '75px')};
  margin-right: ${props => (props.digits === 'single' ? '45px' : '0')};
`;

const ClockList = styled(List)`
	span:nth-child(1) {
		padding-right: 5px;
	}
	span:nth-child(2) {
		padding-left: 5px;
	}
`;

export { ListContainer, CalculatorList, ClockList };