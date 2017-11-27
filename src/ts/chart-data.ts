export class ChartData {

  public labels: string[];
  public datasets: DataSet[];

  constructor() {
    this.labels = ['1', '2', '3', '4', '5', '6'];
    this.datasets = <DataSet[]>[{
      backgroundColor: '#F24AD1',
      data: [123, 33, 54, 203, 155, 211],
      label: 'BTC'
    }];
  }
}

interface DataSet {
  label: string;
  backgroundColor: string;
  data: number[];
}
