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
  SubListItem,
  Type,
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
  let expenses;
  let income;

  if (statistic.transaction[0]?.type === false) {
    expenses = statistic.transaction[0]?.sum;
  } else {
    expenses = statistic.transaction[1]?.sum;
  }

  if (statistic.transaction[0]?.type === true) {
    income = statistic.transaction[0]?.sum;
  } else {
    income = statistic.transaction[1]?.sum;
  }

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
        <SubListItem>
          <SubItem>Expenses:</SubItem>
          <Type expenses>{expenses}</Type>
        </SubListItem>
        <SubListItem>
          <SubItem>Income:</SubItem>
          <Type>{income}</Type>
        </SubListItem>
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
