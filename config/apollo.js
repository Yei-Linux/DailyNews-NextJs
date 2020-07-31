import { ApolloClient , HttpLink , InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';
import Cookies from 'js-cookie';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
});

const authLink = setContext((_,{ headers })=>{
    return {
        headers : {
            ...headers,
            authorization: `Bearer ${Cookies.get('jwt')}`
        }
    }
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    queryDeduplication: false,
    link: authLink.concat(httpLink)
});

export default client;