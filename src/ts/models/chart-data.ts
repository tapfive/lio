import { Coin } from './coin';
import { CoinData } from './coin-data';
import { DateTime } from 'luxon';
import { NumberMap } from '../number-map';

export class ChartData {

  public labels: string[];
  public datasets: DataSet[];
  public canvas: any;

  constructor(canvas: any) {
    this.labels = [];
    this.datasets = [];
    this.canvas = canvas;
  }

  public setLabels(prices: NumberMap<number>, useDays: boolean) {
    let labelArray = [];
    for (let key in prices) {
      let format = useDays ? DateTime.DATE_MED : DateTime.TIME_SIMPLE;
      let dateTime = DateTime.fromMillis(Number(key) * 1000).toLocaleString(format);
      labelArray.push(dateTime);
    }

    this.labels = labelArray;
  }

  public addDataSet(coinSymbol: string, coinAmount: number, prices: NumberMap<number>) {

    let priceArray: string[] = [];

    for (let key in prices) {
      let value = prices[key];
      priceArray.push((value * coinAmount).toFixed(2));
    }

    let gradient = this.canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, 'rgba(102,255,199,1)');
    gradient.addColorStop(1, 'rgba(102,255,199,0.24)');

    this.datasets.push({
      backgroundColor: gradient,
      borderColor: 'RGBA(0,255,162,1.00)',
      data: priceArray,
      defaultFontColor: '#00334C',
      defaultFontFamily: '"Source Sans Pro","Avenir", system-ui, sans-serif;',
      label: coinAmount.toFixed(8) + ' ' + coinSymbol,
      lineTension: '0.4',
      pointBackgroundColor: 'RGBA(0,255,162,1.00)',
      pointBorderColor: 'RGBA(0,255,162,0.2)',
      pointHoverBackgroundColor: 'RGBA(0,255,162,1.00)',
      pointHoverBorderColor: 'RGBA(251,252,255,1.00)'
    });
  }
}

interface DataSet {
  backgroundColor: string;
  borderColor: string;
  data: string[];
  defaultFontColor: string;
  defaultFontFamily: string;
  label: string;
  lineTension: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
}
