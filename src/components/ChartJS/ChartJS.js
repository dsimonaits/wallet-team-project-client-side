import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const ChartJs = ({ transactions }) => {
  const total = transactions.reduce((acc, { sum }) => {
    return acc + sum;
  }, 0);

  const category = transactions.reduce((acc, { category, sum }) => {
    acc[category] = acc[category] ? acc[category] + sum : sum;

    return acc;
  }, {});

  console.log(category);

  const data = {
    labels: Object.keys(category),
    datasets: [
      {
        label: ' Sveta',
        data: Object.values(category),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        cutout: '80%',

        hoverOffset: '4px',
      },
    ],
  };

  const options = {
    type: 'doughnut',
    data,
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: 'right',
        maxWidth: 130,
        maxHeight: 160,
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          padding: 20,
        },
      },
    },
  };

  // const centerText = {
  //   id: 'centerText',
  //   beforeDatasetsDraw(chart, args, pluginOptions) {
  //     const { ctx } = chart;
  //     ctx.textAlign = 'center';

  //     ctx.fillText(
  //       `${total}`,
  //       chart.getDatasetMeta(0).data[0].x,
  //       chart.getDatasetMeta(0).data[0].y
  //     );
  //   },
  // };
  // const plugins = [centerText];

  return (
    <div style={{ width: '400px' }}>
      <Doughnut
        data={data}
        options={options}
        plugins={[
          {
            id: 'centerText',
            beforeDatasetsDraw(chart, args, pluginOptions) {
              const { ctx } = chart;
              ctx.textAlign = 'center';

              ctx.fillText(
                `${total}`,
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
              );
            },
          },
        ]}
      />
      )
    </div>
  );
};
