import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectLabels = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('January');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'year':
        setYear(value);
        break;
      case 'month':
        setMonth(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={month} name="month" onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>Month</em>
          </MenuItem>
          <MenuItem value={'January'}>January</MenuItem>
          <MenuItem value={'01'}>February</MenuItem>
          <MenuItem value={12}>March</MenuItem>
          <MenuItem value={13}>April</MenuItem>
          <MenuItem value={14}>May</MenuItem>
          <MenuItem value={15}>June</MenuItem>
          <MenuItem value={16}>July</MenuItem>
          <MenuItem value={17}>August</MenuItem>
          <MenuItem value={18}>September</MenuItem>
          <MenuItem value={19}>October</MenuItem>
          <MenuItem value={20}>November</MenuItem>
          <MenuItem value={21}>December</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select value={year} name="year" onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>Year</em>
          </MenuItem>
          <MenuItem value={10}>2009</MenuItem>
          <MenuItem value={20}>2010</MenuItem>
          <MenuItem value={21}>2011</MenuItem>
          <MenuItem value={22}>2012</MenuItem>
          <MenuItem value={23}>2013</MenuItem>
          <MenuItem value={24}>2014</MenuItem>
          <MenuItem value={25}>2015</MenuItem>
          <MenuItem value={26}>2016</MenuItem>
          <MenuItem value={27}>2017</MenuItem>
          <MenuItem value={28}>2018</MenuItem>
          <MenuItem value={29}>2019</MenuItem>
          <MenuItem value={30}>2020</MenuItem>
          <MenuItem value={31}>2021</MenuItem>
          <MenuItem value={32}>2022</MenuItem>
          <MenuItem value={33}>2023</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
