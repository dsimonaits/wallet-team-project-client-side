import {
  List,
  Item,
  Elem,
  Sum,
  Category,
  HeadList,
  HeadCat,
  SubList,
  SubItem,
} from './StatisticsList.styled';

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
    <>
      <HeadList>
        <HeadCat>Category</HeadCat>
        <HeadCat>Sum</HeadCat>
      </HeadList>
      <List>
        {statistic.result.map(({ totalSum, category }, index) => (
          <Item key={index}>
            <Elem style={{ backgroundColor: colors[index] }}></Elem>
            <Category>{category}</Category>
            <Sum>{totalSum}</Sum>
          </Item>
        ))}
      </List>
      <SubList>
        <SubItem>Expenses:</SubItem>
        <SubItem>Income:</SubItem>
      </SubList>
    </>
  );
};

// {Object.entries(obj).map(([category, sum], index) => (
//       <Item key={index}>
//         <Elem style={{ backgroundColor: colors[index] }}></Elem>
//         <Category>{category}</Category>
//         <Sum>{sum}</Sum>
//       </Item>
//     ))}
