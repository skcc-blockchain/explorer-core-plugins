import { BigNumber } from "app/util/BigNumber";

export interface IUncleDetails {
    /** Uncle number */
    id: number;
    position?: number;
    /** Unix timestamp */
    creationTime: number;
    hash: string;
    /** Parent block number (block that included this uncle) */
    parentId: number;
    nonce: string;
    sha3uncles?: string;
    beneficiaryAddress: string;
    beneficiaryName?: string;

    /** block beneficiary reward not available on memento */
    beneficiaryReward?: BigNumber;
    gasLimit: BigNumber;
    difficulty: BigNumber;
    extraData?: string;
    mixHash: string;
}
