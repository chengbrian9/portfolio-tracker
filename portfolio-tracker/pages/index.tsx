import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Text,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface Account {
  accountNumber: string;
  name: string;
  balance: number;
}

const accounts: Account[] = [
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
const axios = require('axios');
const accessToken = 'your-access-token';
const accountIds = '12345,67890';
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
};
const Home = () => {
  useEffect(() => {
    fetch('https://api.tdameritrade.com/v1/accounts/balances')
  })
  return (
    <Box p={4}>
      <Heading as="h1">Account Balances</Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {accounts.map((account) => (
          <Card key={account.accountNumber}>
            <CardHeader>
              <Heading size="md"> {account.name} </Heading>
            </CardHeader>
            <CardBody>
              <Text>${account.balance}</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <NextLink href="/transactions" passHref>
        <Link>Transactions</Link>
      </NextLink>
    </Box>
  );
};

export default Home;
