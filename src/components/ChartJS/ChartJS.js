import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const ChartJs = ({ statistic }) => {
  const arrayTotalSum = statistic.result.map(({ totalSum }) => totalSum);
  const data = {
    labels: [],
    datasets: [
      {
        label: ' Sveta',
        data: arrayTotalSum,

        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        cutout: '70%',
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

  return (
    <Chart>
      <Doughnut
        data={data}
        options={options}
        plugins={[
          {
            id: 'centerText',
            beforeDatasetsDraw(chart, args, pluginOptions) {
              const { ctx } = chart;
              ctx.textAlign = 'center';
              ctx.font = '18px "Circe", Helvetica, Arial, sans-serif';

              const total = statistic.transaction[0]
                ? statistic.transaction[0].sum
                : 0;
              const a = new Intl.NumberFormat('ru-RU').format(total);
              console.log(parseFloat(a).toFixed(2));
              ctx.fillText(
                '₴ ' + new Intl.NumberFormat('ru-RU').format(total),
                chart?.getDatasetMeta(0)?.data[0]?.x,
                chart?.getDatasetMeta(0)?.data[0]?.y
              );
            },
          },
        ]}
      />
    </Chart>
  );
};
