import {
  TransactionHistoryTable,
  TransactionHistoryTHead,
} from "./Transactions.styled";

export default function Transactions({ transactions }: InintValues) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryTHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryTHead>
      <tbody>
        {transactions.map((e) => (
          <tr key={e.id}>
            <td>{e.type}</td>
            <td>{e.amount}</td>
            <td>{e.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

interface InintValues {
  transactions: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
}
