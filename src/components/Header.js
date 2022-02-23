import React from 'react';
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";



export default function Header () {
  return (
    <Box p={0}>
      <Flex>
      <Box bg='#3772FF' w='100%' p={2} color='white' fontFamily='Poppins, sans-serif' fontWeight='semibold' fontSize='xs' textAlign='center'>
        Lorem ipsum is simply printing dummy text of the printing
        </Box>
      {/* <Box bg='#3772FF' w='100%' p={2} color='white' fontFamily='sans-serif' fontWeight='semibold' fontSize='xs' textAlign='center'>
        Lorem ipsum is simply printing dummy text of the printing
        </Box>  */}
      </Flex>
    </Box>
  );
};
