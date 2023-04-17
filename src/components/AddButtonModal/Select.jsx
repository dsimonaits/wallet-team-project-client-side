// import { TextField, MenuItem } from '@mui/material';
import {
  useState,
  // useEffect
} from 'react';
import { Select } from './Select.styled';
export const SelectFunk = () => {
  const [mySelect, setMySelect] = useState('');
  // const handleChange = e => useMySelect(e.target.value);
  return (
    <div>
      <Select value={mySelect} onChange={e => setMySelect(e.target.value)}>
        <option value="Main expenses">Main expenses</option>
        <option value="Car">Car</option>
        <option value="Child care">Child care</option>
        <option value="Household products">Household products</option>
        <option value="Education">Education</option>
        <option value="Leisure">Leisure</option>
        <option value="Other expenses">Other expenses</option>
        <option value="Entertainment">Entertainment</option>
      </Select>
    </div>
  );
};
