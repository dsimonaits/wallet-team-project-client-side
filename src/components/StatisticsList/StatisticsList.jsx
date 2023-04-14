export const StatisticsList = ({ transactions }) => {
  const colors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  const obj = transactions.reduce((acc, { category, sum }) => {
    acc[category] = acc[category] ? acc[category] + sum : sum;

    return acc;
  }, {});

  return (
    <ul>
      {Object.entries(obj).map(([category, sum], index) => (
        <li style={{ width: '300px', display: 'flex' }} key={index}>
          <p
            style={{
              width: '20px',
              height: '15px',
              backgroundColor: colors[index],
              marginRight: '20px',
            }}
          ></p>
          <p>{category}</p>
          <p style={{ marginLeft: 'auto' }}>{sum}</p>
        </li>
      ))}
    </ul>
  );
};
