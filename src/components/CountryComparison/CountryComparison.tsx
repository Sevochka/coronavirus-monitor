import React from 'react';
import Highcharts from 'highcharts';
import { InputNumber, Slider } from 'antd';
import { inject, observer } from 'mobx-react';
import HighchartsReact from 'highcharts-react-official';

import CountryStore from 'store/CountryStore';
import splitCamelCaseToString from 'utils/splitCamelCaseToString';

import './CountryComparison.scss';

type Props = {
  store: CountryStore,
};

const COLORS: string[] = [
  'rgb(201, 36, 39)',
  'rgb(255,205,0)',
  'rgb(160,211,152)',
  'rgb(225,220,220)',
  'rgb(224,119,234)',
  'rgb(59,51,16)',
  'rgb(138,210,240)',
  'rgb(111,183,4)',
  'rgb(240,166,190)',
  'rgb(255,213,0)',
];

const CountryComparison: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => {
    const data = store.countriesWithMostCases(store.selectedPropertyName).map((country, i) => {
      return {
        name: country.Country,
        code: country.CountryCode,
        y: Number(country[store.selectedPropertyName]),
        color: COLORS[i],
      };
    });

    const { amount } = store;

    const onAmountChange = (value: string | number | undefined) => {
      if (value) {
        store.setAmount(+value);
      }
    };

    const options = {
      chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      title: {
        text: `Top <strong>${amount}</strong> countries by ${splitCamelCaseToString(
          store.selectedPropertyName,
        )}`,
      },
      plotOptions: {
        series: {
          grouping: false,
          borderWidth: 0,
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> {series.name}: ' +
          '<b>{point.y} cases</b><br/>',
      },
      xAxis: {
        type: 'category',
        max: amount - 1,
        labels: {
          useHTML: true,
          animate: true,
          formatter() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { value } = this;
            let output = '';

            data.forEach((country) => {
              if (country.name === value) {
                output = country.code;
              }
            });

            return `<span class="flex-col">
                        <img className='img-rounded'
                            src="https://www.countryflags.io/${output}/shiny/64.png"
                            style="width: 40px"
                            >
                    </span>`;
          },
        },
      },
      yAxis: [
        {
          title: {
            text: 'Cases',
          },
          showFirstLabel: false,
          max: data[0].y * 1.001,
        },
      ],
      series: [
        {
          name: 'QTY',
          id: 'main',
          dataSorting: {
            enabled: true,
          },
          dataLabels: [
            {
              enabled: true,
              inside: true,
              style: {
                fontSize: '16px',
              },
            },
          ],
          data,
        },
      ],
      exporting: {
        allowHTML: true,
      },
    };

    return (
      <>
        <div className="flex-row">
          <Slider
            min={1}
            max={10}
            onChange={onAmountChange}
            value={typeof amount === 'number' ? amount : 0}
          />

          <InputNumber min={1} max={10} value={amount} onChange={onAmountChange} />
        </div>

        <HighchartsReact highcharts={Highcharts} options={options} />
      </>
    );
  }),
);
export default CountryComparison;
