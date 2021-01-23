import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
    </StyledCheckbox>
  </CheckboxContainer>
)

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  background: ${props => props.checked ? '#5E3399' : 'white'};
  border: ${props => props.checked ? '1px solid #5E3399' : '1px solid rgba(0,0,0,0.8)' };
  transition: all 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  border-radius: 5px;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export default Checkbox;