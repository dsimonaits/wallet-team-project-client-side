import styled from 'styled-components';
import Eliipse_Grey from '../../images/authicons/ellipse-grey.png';
import Eliipse_Pink from '../../images/authicons/ellipse-pink.png';
import Log_Img_Desktop from '../../images/authicons/log-img-desktop.png';
import Log_Img_Tablet from '../../images/authicons/log-img-tablet.png';
import Reg_Img_Desktop from '../../images/authicons/reg-img-desktop.png';
import Reg_Img_Tablet from '../../images/authicons/reg-img-tablet.png';

export const Section = styled.section`
     display: block;
     height: 100%;
     padding: 0;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: var(--primary-white-color);
  @media screen and (min-width: 768px) {
    background-color: #E5E5E5;
    background-image: url(${Eliipse_Grey}), url(${Eliipse_Pink});
    background-repeat: no-repeat;
    background-position: 0px 100%, right top;
    padding: 60px 114px 0;
    width: 100vw;
    min-height: 1024px;
    text-align: center;
    height: 100vh;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    padding: 0;
    min-height: 720px;
  }
`;

export const ImgContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    width: 540px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const ImgWrapperLogin = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(${Log_Img_Tablet});
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: padding-box;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 260px;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${Log_Img_Desktop});
    width: 435px;
    height: 420px;
    margin-right: 32px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 768px) {
    color: var(--primary-text-color);
    display: flex;
    margin-right: auto;
    font-family: var(--secondary-font-family);
    font-weight: 400;
    font-size: 30px;
    line-height: 1.5;
    margin-left: 40px;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    width: 187px;
  }
`;


export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  padding-top: 20px;
  @media screen and (max-width: 768px) and (min-height: 570px) {
    height: 100vh;
  }
  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 57%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);;
    backdrop-filter: blur(25px);
  }
`;


export const ImgWrapperReg = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(${Reg_Img_Tablet});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 274px;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${Reg_Img_Desktop});
    width: 452px;
    height: 412px;
    margin-bottom: 32px;
    margin-right: 32px;
  }
`;








