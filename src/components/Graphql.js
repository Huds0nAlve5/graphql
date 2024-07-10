import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql',
})

export default function Graphql({children}) {
    return(
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
};
