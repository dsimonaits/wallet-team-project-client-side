import { PropTypes } from 'prop-types';
import { SectionStyled } from './Section.styled';

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Section;
