import React, { useEffect, useState } from "react";
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
const axios = require('axios');
const options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const data = {
    grant_type: 'refresh_token',
    refresh_token: process.env.NEXT_PUBLIC_REF_TOKEN,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
};
const Home = () => {
  const [accounts, setAccounts] = useState<any>([])
  useEffect(() => {
    axios.post('https://api.tdameritrade.com/v1/oauth2/token', data, options)
    .then(response => {
      const accessToken = response.data.access_token
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
      axios.get('https://api.tdameritrade.com/v1/accounts', params)
      .then(response => {
        const accounts = response.data;
        setAccounts(accounts)
      })
      .catch(error => {
        console.error(error)
      })
    })}, [])
    
  return (
    <Box p={4}>
      <Heading as="h1">Account Balances</Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {accounts ? accounts.map((account) => (
          <Card key={account.securitiesAccount.accountId}>
            <CardHeader>
              <Heading size="md"> TD {account.securitiesAccount.accountId}</Heading>
            </CardHeader>
            <CardBody>
              <Text>${account.securitiesAccount.initialBalances.accountValue}</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        )) : <Card></Card>
      }
      </SimpleGrid>
      <NextLink href="/transactions" passHref>
        <Link>Transactions</Link>
      </NextLink>
    </Box>
  );
};

export default Home;
