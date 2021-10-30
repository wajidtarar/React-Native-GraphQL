import React from 'react';
import Screens from './screens';


import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';




import getEnvVars from '../config';
const { API_URI } = getEnvVars();
const uri = API_URI;
console.log("URI: ", uri);
console.log("getEnvVars(): ", getEnvVars());


const cache = new InMemoryCache();
// Create a instance of Apollo Client
const client = new ApolloClient({
  uri,
  cache
});




const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};


export default Main;