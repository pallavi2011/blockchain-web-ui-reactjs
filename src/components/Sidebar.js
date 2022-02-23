import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Button,

} from '@chakra-ui/react'
import {
    BsGrid,
    BsArrowLeft,
    BsBarChart,
    BsToggleOn,
    BsGlobe2,
    BsCashCoin,
    
    
} from 'react-icons/bs';

import {FaCoins, FaChartPie} from 'react-icons/fa';
import NavItem from '../components/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")

  const CircleIcon = (props) => (
   <div style={{background: 'blue', height: '20px', width:'20px', borderRadius:'50%', textAlign:'center', justifyContent:'center', alignItem:'center',  color: 'white', fontSize:'12px', fontWeight:'500'}} viewBox="0 0 25 15">N</div>
  )
  return (
    <Flex
            pos="sticky"
            left="5"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "1px" : "1px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            borderRight='1px' borderColor='gray.700'
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
              <Flex FlexDir='row'>
                <Flex mt='1'>
                <Button leftIcon={<CircleIcon/>} blockSize='min' colorScheme='#353945' variant='solid'>
                  Name
                </Button>
                <IconButton
                    background="none"
                    _hover={{ background: 'none' }}
                    icon={<BsArrowLeft  color='white'/>}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                </Flex>
               
              </Flex>
                
                

                <NavItem navSize={navSize} icon={BsGrid} title="Home" />
                <NavItem navSize={navSize} icon={BsBarChart} title="Section 1" active />
                <NavItem navSize={navSize} icon={BsBarChart} title="Section 2" />
                <NavItem navSize={navSize} icon={BsBarChart} title="Section 3" />
                <NavItem navSize={navSize} icon={BsCashCoin} title="Section 4" />
                <NavItem navSize={navSize} icon={FaCoins} title="Section 5" />
                <NavItem navSize={navSize} icon={FaChartPie} title="Section 6" />
                <NavItem navSize={navSize} icon={BsBarChart} title="Section 7" />
            </Flex>

            <Flex
               
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
               <Flex mt={9} align="center">
                <Flex flexDir="row" display={navSize == "small" ? "none" : "flex"}>
                    
                        <Button leftIcon={<CircleIcon/>} size='sm' bg='#353945' variant='solid' className='footer-btn'>
                          <Text color='white'>$0.90</Text>
                        </Button>
                        <Button bg='#A3E3FF' size='sm' variant='outline' className='footer-btn'>
                          <Text color='#3772FF'>Buy $XYZ</Text>
                        </Button>
                      
                        
                  
                    </Flex>
                    
                </Flex>
                <Flex flexDir='row' mt='3'>
                       <IconButton bg='none' color='#353945' icon={<BsGlobe2 />} height='30px' width='30px' mr='2'/>
                       <IconButton  bg='none' icon={<BsToggleOn/>}  color='#353945' height='30px' width='30px' />
                  </Flex>
                </Flex>
            </Flex>
        
  );
};
