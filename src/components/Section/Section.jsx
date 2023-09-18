import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionStyled } from './Section.styled';

const Section = ({ children }) => {
  return <SectionStyled id="blur">{children}</SectionStyled>;
};

export default Section;
