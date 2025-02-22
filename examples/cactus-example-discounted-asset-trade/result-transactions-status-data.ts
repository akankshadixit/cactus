/*
 * Copyright 2020-2022 Hyperledger Cactus Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * result-transactions-status-data.ts
 */

import { TransactionStatus } from "./transaction-status";

export class ResultTransactionStatusData {
  constructor() {
    this.transactionStatus = [];
  }

  stateInfo: number;
  transactionStatus: TransactionStatus[];
}
