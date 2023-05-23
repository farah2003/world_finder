import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProvider } from './Context/AppContext';
import { theme } from './theme'
import App from './App'
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </ApolloProvider>
  </ChakraProvider >

);

reportWebVitals();
