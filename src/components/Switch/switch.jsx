import { Label, Checkbox, Slider,ToggleContainer,Income, Expense} from './switch.styled';
// import sprite from '../../images/sprite.svg';
import { useState } from 'react';
 export const Switch = () => {
  const [onSwitch, setOnSwitch] = useState(false)
   const handleChangeSwitch = ({toggleTheme}) => {
    setOnSwitch(!onSwitch)
    toggleTheme()
  };
   
    return (
   
    <ToggleContainer >
              <Income >Income</Income>
              <Label>  
        <Checkbox name='onSwitch' value={onSwitch} type="checkbox" checked={onSwitch} onClick={handleChangeSwitch} />
          <Slider />
    
            </Label>
              <Expense>Expense</Expense>
            </ToggleContainer>
  
        
  );
};
