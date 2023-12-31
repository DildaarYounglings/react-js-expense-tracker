import React from 'react';
import {GlobalContextData} from '../context/GlobalState';
import { Transaction } from './Transaction';
export const TransactionList = () => {
  const {transactions} = GlobalContextData();
  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map( transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
    </>
  )
}
