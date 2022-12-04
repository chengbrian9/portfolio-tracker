import React from "react";
import { HotTable } from "@handsontable/react";
import { Box, Heading } from "@chakra-ui/react";
import 'handsontable/dist/handsontable.full.min.css';
import { registerAllModules } from 'handsontable/registry';
const transactions = [
  {
    date: "2022-12-01",
    description: "Groceries",
    amount: 25.0,
  },
  {
    date: "2022-11-30",
    description: "Gas",
    amount: 50.0,
  },
  {
    date: "2022-11-29",
    description: "Restaurant",
    amount: 100.0,
  },
];
registerAllModules();
const TransactionTable = () => {
  return (
    <Box>
      <Heading as="h1">Transactions</Heading>
      <HotTable
        licenseKey="non-commercial-and-evaluation"
        data={transactions}
        height="auto"
        contextMenu={['copy', 'cut']}
        colHeaders={["Date", "Description", "Amount"]}
        columns={[
          {
            data: "date",
          },
          {
            data: "description",
          },
          {
            data: "amount",
          },
        ]}
      />
    </Box>
  );
};

export default TransactionTable;
