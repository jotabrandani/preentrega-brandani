//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import * as React from 'react';
//import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Box height="100vh">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a Online Store!!" />
      </Box>

    </ChakraProvider>
  );
};

export default App;
