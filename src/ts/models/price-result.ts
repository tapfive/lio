import { StringMap } from '../string-map';

export class PriceResult {
  public successful: boolean;
  public result?: StringMap<StringMap<number>>;

  constructor(successful: boolean, result?: StringMap<StringMap<number>>) {
    if (successful && result === undefined) {
      throw new Error('PriceResult must contain a result if successful.');
    }

    this.successful = successful;
    this.result = result;
  }
}
