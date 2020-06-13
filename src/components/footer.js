import React from 'react';
import styled from 'styled-components';

const year = new Date();
const currentyear = year.getFullYear();

const Footer = () => (
  <StyledFooter>
    <p>&copy; Jonathan {currentyear}</p>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  bottom: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 15px;
    background: rgba(0,0,0,0.8);
    p {
      color: white;
      margin: 0;
      font-weight: 600;
      font-size: 16px;
    }
`;

export default Footer;