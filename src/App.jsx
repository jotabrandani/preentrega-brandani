//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import * as React from 'react';
//import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MainLayout from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      {/*<ItemListContainer />*/}
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
