import BigNumber from "bignumber.js";

abstract class MetaInteger {
    // TODO: confire BigNumber to not allow decimal places
    protected _value: BigNumber = new BigNumber(0);
    protected _size: number = 0;

    abstract add(n: MetaInteger): MetaInteger;
    abstract sub(n: MetaInteger): MetaInteger;
    abstract mul(n: MetaInteger): MetaInteger;
    abstract div(n: MetaInteger): MetaInteger;
}

export default MetaInteger;