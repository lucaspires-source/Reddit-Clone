import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.URI,
    headers: {
        Authorization:`Apikey ${process.env.API_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;