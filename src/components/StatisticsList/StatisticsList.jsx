import { List, Item, Elem, Sum, Category } from './StatisticsList.styled';

export const StatisticsList = ({ statistic }) => {
  const colors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];

  return (
    <List>
      {statistic.result.map(({ totalSum, category }, index) => (
        <Item key={index}>
          <Elem style={{ backgroundColor: colors[index] }}></Elem>
          <Category>{category}</Category>
          <Sum>{totalSum}</Sum>
        </Item>
      ))}
    </List>
  );
};

// {Object.entries(obj).map(([category, sum], index) => (
//       <Item key={index}>
//         <Elem style={{ backgroundColor: colors[index] }}></Elem>
//         <Category>{category}</Category>
//         <Sum>{sum}</Sum>
//       </Item>
//     ))}
