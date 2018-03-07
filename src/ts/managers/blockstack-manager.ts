import * as blockstack from "blockstack";

export class BlockstackManager {
  private static instance: BlockstackManager = new BlockstackManager();

  private blockstackInstance: any = blockstack;

  public static getInstance(): BlockstackManager {
    return BlockstackManager.instance;
  }

  constructor() {
    if (BlockstackManager.instance) {
      throw new Error("Instantiation failed: Use BlockstackManager.getInstance() instead of new.");
    }
    BlockstackManager.instance = this;
  }

  public getBlockstack(): any {
    return this.blockstackInstance;
  }
}
