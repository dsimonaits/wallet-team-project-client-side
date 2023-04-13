import {
  BtnIcon,
  ButtonShow,
  ButtonHide,
} from 'components/ShowPwdButton/ShowPwdButton.styled';

const ShowPwdButton = ({ setIsRevealPwd, isRevealPwd, ...props }) => {
  return (
    <BtnIcon
      {...props}
      onClick={() => {
        setIsRevealPwd(!isRevealPwd);
      }}
    >
      {isRevealPwd ? <ButtonHide /> : <ButtonShow />}
    </BtnIcon>
  );
};

export default ShowPwdButton;