import { PropTypes } from 'prop-types';
import { ContainerStyled } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  height: PropTypes.string,
};

export default Container;
