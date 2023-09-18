import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

import { DateSelect, Control, WrapperControl } from './SelectLabels.styled';

export const SelectLabels = ({ handleSelect }) => {
  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear().toString();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

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

    handleSelect({
      year: name === 'year' ? value : year,
      month: name === 'month' ? value : month,
    });
  };

  return (
    <WrapperControl>
      <Control sx={{ m: 1 }}>
        <DateSelect
          style={{ borderRadius: '30px' }}
          value={month}
          name="month"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Month</em>
          </MenuItem>
          <MenuItem value={'01'}>January</MenuItem>
          <MenuItem value={'02'}>February</MenuItem>
          <MenuItem value={'03'}>March</MenuItem>
          <MenuItem value={'04'}>April</MenuItem>
          <MenuItem value={'05'}>May</MenuItem>
          <MenuItem value={'06'}>June</MenuItem>
          <MenuItem value={'07'}>July</MenuItem>
          <MenuItem value={'08'}>August</MenuItem>
          <MenuItem value={'09'}>September</MenuItem>
          <MenuItem value={'10'}>October</MenuItem>
          <MenuItem value={'11'}>November</MenuItem>
          <MenuItem value={'12'}>December</MenuItem>
        </DateSelect>
      </Control>
      <Control sx={{ m: 1 }}>
        <DateSelect
          style={{ borderRadius: '30px' }}
          value={year}
          name="year"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Year</em>
          </MenuItem>
          <MenuItem value={'2009'}>2009</MenuItem>
          <MenuItem value={'2010'}>2010</MenuItem>
          <MenuItem value={'2011'}>2011</MenuItem>
          <MenuItem value={'2012'}>2012</MenuItem>
          <MenuItem value={'2013'}>2013</MenuItem>
          <MenuItem value={'2014'}>2014</MenuItem>
          <MenuItem value={'2015'}>2015</MenuItem>
          <MenuItem value={'2016'}>2016</MenuItem>
          <MenuItem value={'2017'}>2017</MenuItem>
          <MenuItem value={'2018'}>2018</MenuItem>
          <MenuItem value={'2019'}>2019</MenuItem>
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2021'}>2021</MenuItem>
          <MenuItem value={'2022'}>2022</MenuItem>
          <MenuItem value={'2023'}>2023</MenuItem>
        </DateSelect>
      </Control>
    </WrapperControl>
  );
};
