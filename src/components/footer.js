import React from 'react';
import styled from 'styled-components';
import { MainContainer } from './layout';

const year = new Date();
const currentyear = year.getFullYear();

const Footer = () => (
  <StyledFooter>
    <MainContainer>
      <p>&copy; Jonathan {currentyear}</p>
    </MainContainer>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 50px;
  p {
    color: rgba(0,0,0,0.8);
    font-weight: 600;
    font-size: 16px;
  }
  @media (max-width: 500px) {
    p {
      text-align: right;
    }
  }
`;

export default Footer;