import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox {...props} checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
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
  border: 3px solid #5E3399;
  border-radius: 5px;
  transition: all 0.2s;
  position: ${props => (props.nonResponsive === true ? 'absolute' : 'static')};
  top: ${props => (props.nonResponsive === true ? '0' : 'auto')};
  left: ${props => (props.nonResponsive === true ? '0' : 'auto')};
  right: ${props => (props.nonResponsive === true ? '0' : 'auto')};
  bottom: ${props => (props.nonResponsive === true ? '0' : 'auto')};
  width: ${props => (props.nonResponsive === true ? '100%' : '25px')};
  height: ${props => (props.nonResponsive === true ? 'auto' : '25px')};
  z-index: ${props => (props.nonResponsive === true ? '-1' : '0')};
  svg {
    display: ${props => (props.nonResponsive === true ? 'none' : 'block')};
  }
  @media (max-width: 500px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: -1;
    svg {
      display: none;
    }
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export default Checkbox;