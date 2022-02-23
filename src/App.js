import React from 'react';
import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LastSection from "./components/LastSection";
import MidSection from "./components/MidSection";
import { ChakraProvider } from '@chakra-ui/react';
import  './App.css';

function App() {
  return (
  <ChakraProvider>

  
    <Box bg='black'>
      <Header />
      <SimpleGrid columns={11} gap={3}>
        <GridItem colSpan={2}>
            <Sidebar/>
        </GridItem>
        <GridItem colSpan={6}>
         <MidSection/>
        </GridItem>
        <GridItem colSpan={3}>
          <LastSection/>
        </GridItem>
        </SimpleGrid>
    </Box>
    </ChakraProvider>
  );
}

export default App;
