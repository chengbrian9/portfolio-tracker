import React from "react";
import { Box, Heading, Card, CardHeader, CardBody } from "@chakra-ui/react";
const accounts = [
  {
    accountNumber: "1234567890",
    name: "Checking Account",
    balance: 1000.0,
  },
  {
    accountNumber: "0987654321",
    name: "Savings Account",
    balance: 2000.0,
  },
  {
    accountNumber: "1357924680",
    name: "Investment Account",
    balance: 3000.0,
  },
];

const Home = () => {
  return (
    <Box p={4}>
      <Heading as="h1">Account Balances</Heading>
      {accounts.map(account => (
        <Card key={account.accountNumber} mt={4}>
          <CardHeader>
            <Heading as="h2" size="lg">
              {account.name}
            </Heading>
          </CardHeader>
          <CardBody>
            <Heading as="h3" size="lg">
              {account.balance}
            </Heading>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
