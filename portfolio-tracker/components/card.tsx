import React from "react";

export interface Account {
  accountNumber: string;
  name: string;
  balance: number;
}

const Card = ({ accountNumber, name, balance }: Account) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Account Number: {accountNumber}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Card;
