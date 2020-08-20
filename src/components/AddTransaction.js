import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Transaksi baru</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Jenis transaksi</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Besaran transaksi
          <br /> (negatif = pengeluaran, positif = pemasukan)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Catat</button>
      </form>
    </>
  )
}
