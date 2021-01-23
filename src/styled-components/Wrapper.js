import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  margin: ${props => (props.margin === 'auto' ? '0 auto' : '0')}
`;

export default Wrapper;