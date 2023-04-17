import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from './Chart.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/session/sessionSelectors';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const ChartJs = ({ statistic }) => {
  const arrayTotalSum = statistic.result.map(({ totalSum }) => totalSum);
  const { balance } = useSelector(selectUser);

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

              ctx.fillText(
                '₴ ' + new Intl.NumberFormat('ru-RU').format(balance),
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
