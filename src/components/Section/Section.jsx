import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { toggleIsLoading } from 'redux/global/globalSlice';
import { SectionStyled } from './Section.styled';
import { useDispatch } from 'react-redux';

const Section = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleIsLoading());
  }, [dispatch]);
  return <SectionStyled id="blur">{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Section;
