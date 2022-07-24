/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC721,
  IERC721Interface,
} from "../../../contracts/nft-airdrop/IERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC721__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721Interface {
    return new utils.Interface(_abi) as IERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721 {
    return new Contract(address, _abi, signerOrProvider) as IERC721;
  }
}