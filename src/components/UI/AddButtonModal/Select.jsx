// import { TextField, MenuItem } from '@mui/material';

import { useState } from 'react';
import { Select } from './Select.styled';
export const SelectFunk = () => {
  const [category, setCategory] = useState('');
  // const handleChange = e => useMySelect(e.target.value);
  return (
    <div>
      <Select
        value={category}
        category={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="Main expenses">Main expenses</option>
        <option value="Car">Car</option>
        <option value="Self care">Self care</option>
        <option value="Child care">Child care</option>
        <option value="Household products">Household products</option>
        <option value="Education">Education</option>
        <option value="Leisure">Leisure</option>
        <option value="Other">Other expenses</option>
      </Select>
    </div>
  );
};
