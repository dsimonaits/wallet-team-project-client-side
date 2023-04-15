import styled from 'styled-components';

export const Label = styled.label`
position: relative;
display: inline-block;
width:80px;
height:40px;
/* border-radius:40%; */
/* background-color: green; */
` 
export const AddIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
export const Slider = styled.span`
position: absolute;
cursor: pointer;
border-radius: 32px;
top:0;
left:0;
right: 0;
bottom: 0;
border:solid 1px rgba(224, 224, 224, 1);
background-color: transparent;
&:before {
   content: '';
   background: url('../../images/+ btn.png');
  position: absolute;
  width: 44px;
height: 44px;
 top: -3px;
border-radius:50%;
background-color:rgba(36, 204, 167, 1);
 /* color:rgba(255, 255, 255, 1);  */
font-size:30px;
font-weight: 100;
border: 1px solid #FFFFFF;
background-color: rgba(36, 204, 167, 1); 
transition-property: background-color, transform;
  transition-duration: 500ms;

}
`

  /* &:before{
    content:`${props}`
  } */
export const Checkbox = styled.input`
opacity:0;
width: 0;
height: 0;

&:checked + ${Slider} {
    /* background: green; */

    &:before {
      transform: translateX(40px);
      background-color: rgba(255, 101, 150, 1);
    }
}
`
export const Span = styled.span`

`
