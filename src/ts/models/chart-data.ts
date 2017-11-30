import { CoinData } from './coin-data';
import { DateTime } from 'luxon';
import { NumberMap } from '../number-map';

///////

// grab canvas element and canvas context
// var canvas = <HTMLCanvasElement> document.getElementById("line-chart");
// var ctx = canvas.getContext("2d");
//
// // Apply multiply blend when drawing datasets
// var multiply = {
//
//   beforeDatasetsDraw: function(chart:any, options:any, el:any) {
//     chart.ctx.globalCompositeOperation = 'multiply';
//   },
//   afterDatasetsDraw: function(chart:any, options:any) {
//     chart.ctx.globalCompositeOperation = 'source-over';
//   },
// };
//
// // TODO: FIX
// // Gradient color one
// var gradientOne = ctx.createLinearGradient(0, 0, 0, 150);
// gradientOne.addColorStop(0, '#5555FF');
// gradientOne.addColorStop(1, '#9787FF');
//
// // Gradient color two
// var gradientTwo = ctx.createLinearGradient(0, 0, 0, 150);
// gradientTwo.addColorStop(0, '#FF55B8');
// gradientTwo.addColorStop(1, '#FF8787');
// 

////////
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
      defaultFontColor: '#00334C',
      defaultFontFamily: '"Source Sans Pro","Avenir", system-ui, sans-serif;',
      backgroundColor: 'RGBA(0,255,162,0.4)',
      borderColor: 'RGBA(0,255,162,1.00)',
      pointBackgroundColor: 'RGBA(0,255,162,1.00)',
      pointBorderColor: 'RGBA(0,255,162,0.2)',
      pointHoverBorderColor: 'RGBA(251,252,255,1.00)',
      pointHoverBackgroundColor: 'RGBA(0,255,162,1.00)',
      // pointHoverRadius: "[40/40]",
      lineTension: '0.4',
      data: dataArray,
      label: coinSymbol
    });

    this.datasets = dataSets;
  }
}

interface DataSet {
  backgroundColor: string;
  borderColor: string;
  data: number[];
  defaultFontColor: string;
  defaultFontFamily: string;
  label: string;
  lineTension: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
  // pointHoverRadius: string;
}
