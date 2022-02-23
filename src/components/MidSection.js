import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Flex,
    Text,
    IconButton,
    Button,
    Link,
    Spacer,
    Box,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import {FiExternalLink} from 'react-icons/fi';
import {BsArrowLeft, BsBoxArrowUpRight} from 'react-icons/bs';

export default function MidSection () {
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        const res = axios.get('https://raw.githubusercontent.com/akshita151199/APIs/main/data') .then(function (response) {
            setInfo(response.data.data);
            console.log(info);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
        
    }, []);

    return(
       
        <Flex className='mid-section-container'>

            {/* first section */}
            
            <Flex w='100%'>
                <Box >
                <Text className='section-text'>Section</Text>
                </Box>
                <Spacer />
                <Box >
                <Flex bg='#191B20' p='1' borderRadius='15px'>
                        <Image src='/images/mouse-preview.png' className='mouse-image'/>
                        <Text className='top-text'>0.2 $XYZ</Text>
                        <Button size='xs' bg='#A3E3FF' className='top-tier-btn'>Tier 1</Button>
                </Flex>
                </Box>
            </Flex>
                {/* <Flex w='100%' className='box-right'>
                    
                    
                    
                    
                    
                </Flex> */}
                
           
            
            {/* second section */}
            <Flex className='adsection'>
                <Flex flexDir='column'>
                <Text className='adsection-text'>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                <Box>
                    <Button size='xs' className='ad-btn-text'>Tutorial</Button>
                </Box>
                </Flex>
                <Image src='/images/bitcoin-removebg-preview.png' className='adsection-image'/>
                
                 
            </Flex>

            {/* third section */}
            <Flex className='mid-third-section'>
               
                    <Flex>
                    <Box className='float-child'>
                    <Text color='white' p='3'>Your rewards</Text>
                        <Text className='mid-third-amount'>$ 0.26231428</Text>
                        <Flex>
                            <Box bg='#353945' display='inline' p='2' borderRadius='10px' mr='3'>
                               <Text color='white'>$40 AVAX</Text> 
                            </Box>
                            <Box bg='#353945' display='inline' p='2' borderRadius='10px' mr='3'>
                               <Text color='white'>$10 BNB</Text> 
                            </Box>
                            <Box bg='#353945' display='inline' p='2' borderRadius='10px'>
                               <Text color='white'>$210 BTC</Text> 
                            </Box>
                        </Flex>
                    </Box>
                    <Box className='float-child-right'>
                        <Button leftIcon={<FiExternalLink />} className='customlink' bg='#3772FF'>
                        Custom Link
                        </Button>
                    </Box>

                    </Flex>
                   
                        
                        
                       
                


            </Flex>

            {/* fourth section */}
                <Flex mt='5'>
                    <Box className='small-card'>
                        <Flex>
                            <Image src='/images/cash-bag.png' className='small-card-image'/>   
                            <Text className='small-card-text'>12.5% of fee</Text>
                        </Flex>
                        <Text className='ref-link'>Your Referral Link for xyz</Text>
                        <Box mt='2'>
                            <Input type='url' placeholder='https://unityexchange.design' size='sm' variant='filled' bg='#242731'/>  
                        </Box>
                    </Box>
                    <Box className='small-card'>
                        <Flex>
                            <Image src='/images/cash-bag.png' className='small-card-image'/>   
                            <Text className='small-card-text'>12.5% of fee</Text>
                        </Flex>
                        <Text className='ref-link'>Your Referral Link for xyz</Text>
                        <Box mt='2'>
                            <Input type='url' placeholder='https://unityexchange.design' size='sm' variant='filled' bg='#242731'/>  
                        </Box>
                    </Box>
                </Flex>


            

            {/* tabs section */}
            <Flex flexDir='row' mt='2'>
            
                <Text className='tabs'>First Tab</Text>
                
                <Text className='tabs'>Second Tab</Text>
            </Flex>
           
            
            {/* Table section */}
            <Flex width='100%'>
            <Table className='table-data'>
                 <tbody>
                     <tr>
                         <th className='table-header'>Asset</th>
                         <th className='table-header'>Amount</th>
                         <th className='table-header'>User Account</th>
                         <th className='table-header'>Referral Earning</th>
                         
                     </tr>
                     
                    {info.map((inf, index) => (
                         <tr key={index} className='table-row'>
                         <td>
                        <Flex className='td-container'>
                        
                        <Image src={inf.img} className='td-main-img'/>
                        <Flex flexDir='column'>
                            <Text className='td-text'>{inf.asset}</Text>
                            <Flex>
                                <Text className='td-type'>{inf.type}</Text>
                                <Flex className='td-inside-container'>
                                    <Image src={inf.chain.img} id='chain-img'/>
                                    <Text id='chain-name'>{inf.chain.name}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        
                        </Flex>
                       
                          
                                 </td>
                              <td>
                                  <Flex flexDir='column'>
                                    <Text className='td-text'>{inf.amount}{' '}BNB</Text>
                                    <Text fontSize='14px' fontFamily='Inter'>{inf.state &&  inf.state.charAt(0).toUpperCase() +  inf.state.slice(1)}</Text>
                                  </Flex>
                                 
                              </td>
                              <td>
                                <Text className='td-text'>
                                {inf.user.length > 5 ? inf.user.substr(0,5) + ".." + inf.user.substr(inf.user.length - 7, inf.user.length) : inf.user}
                                </Text>
                                
                              </td>
                              <td>
                                  <Flex flexDir='column' alignItems='center'>
                                    <Text className='td-text'>
                                        {inf.referral_earnings}{' '}BNB
                                    </Text>
                                    <Flex flexDir='row'>
                                        <Text className='td-inner-text'>View on BSC Scan</Text>
                                        <IconButton icon={<BsBoxArrowUpRight/>} bg='#242731' width='10px' height='10px'/>
                                        </Flex>
                                       
                                  </Flex>
                                  
                              </td>
                          </tr>
                    ))}
                    
                </tbody>
                </Table>
                
            </Flex>
                 
           
            
        </Flex>
    )
}