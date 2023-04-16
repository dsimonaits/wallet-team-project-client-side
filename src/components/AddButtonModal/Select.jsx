import {TextField,MenuItem } from '@mui/material';
export const Select = () => {
    const currencies = [
  {
    value: 'Main expenses',
    label: 'Main expenses',
  },
  {
    value: 'Car',
    label: 'Car',
  },
  
  {
    value: 'Child care',
    label: 'Child care',
  },
  {
    value: 'Household products',
    label: 'Household products',
  },
  {
    value: 'Education',
    label: 'Education',
  },
  {
    value: 'Leisure',
    label: 'Leisure',
  },
  {
    value: 'Other expenses',
    label: 'Other expenses',
  },
  {
    value: 'Entertainment',
    label: 'Entertainment',
  },

];
    return (
        <TextField
                size="small"
                
          id="standard-select-currency"
                select
                // label="Select a category"
                defaultValue="Select a category"
                // placeholder='Select a category'
          helperText="Select a category"
          variant="standard"
              >
              {currencies.map((option) => (
             <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> 
    )
}