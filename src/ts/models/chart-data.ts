import { CoinData } from './coin-data';
import { DateTime } from 'luxon';
import { NumberMap } from '../number-map';

export class ChartData {

  public labels: string[];
  public datasets: DataSet[];

  constructor() {
    this.labels = [];
    this.datasets = [];
  }

  public setLabels(prices: NumberMap<number>) {
    let labelArray = [];
    for (let key in prices) {
      let dateTime = DateTime.fromMillis(Number(key) * 1000).toLocaleString(DateTime.TIME_SIMPLE);
      labelArray.push(dateTime);
    }

    this.labels = labelArray;
  }

  public addDataSet(coinSymbol: string, prices: NumberMap<number>) {

    let dataSets: DataSet[] = [];
    let dataArray: number[] = [];

    for (let key in prices) {
      let value = prices[key];
      dataArray.push(value);
    }

    dataSets.push({
      backgroundColor: '#F24AD1',
      data: dataArray,
      label: coinSymbol
    });

    this.datasets = dataSets;
  }
}

interface DataSet {
  label: string;
  backgroundColor: string;
  data: number[];
}
