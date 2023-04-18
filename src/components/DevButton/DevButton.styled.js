import styled from 'styled-components';

export const TeamButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 40px;

  background-color: transparent;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: transparent;
  cursor: pointer;
  transition: var(--transition);
  margin-left: 40px;
  &:hover {
    color: var(--ascent-text-color);
    text-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
  }
`;
