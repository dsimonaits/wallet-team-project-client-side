import React from 'react';
import { SectionStyled } from './Section.styled';

const Section = ({ children }) => {
  return <SectionStyled id="blur">{children}</SectionStyled>;
};

export default Section;
