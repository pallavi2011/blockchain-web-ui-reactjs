import React  from 'react';

import {
    Flex,
    IconButton,
    Button,
    Box,
    Image,
    Input,
    Select,
} from '@chakra-ui/react';


import {BsArrowLeft, BsBoxArrowInRight} from 'react-icons/bs';
import {FiExternalLink} from 'react-icons/fi'


export default function LastSection () {

    return(
        <Flex flexDir='column' className='last_section_container'>
            <Flex>
            <Box className='last-section-top-left'>
                <Image src='/images/avalanche-avax-logo.png' className='avalanche-image'/>
                <Select placeholder='Avalanche' variant='unstyled' className='last-select' color='white'/>
            </Box>
            <Box className='last-section-top-right'>
                <Image src='/images/mouse-preview.png' className='mouse-image'/>
                <Select placeholder='0XF6...1353' border='none' color='white' className='last-select'/>  
            </Box>
            </Flex>
            
            <Flex mt='4'>
                <Box>
                    <IconButton
                    
                            icon={<BsArrowLeft />}
                            background="none"
                            color='whiteAlpha.900'
                            _hover={{ background: 'none' }}     
                        />
                    <a href='#!' className='last-link'>Custom Link</a>
                </Box>
               
                    
                

            </Flex>
            <Flex mt='4'>
            <Box>
                <a href='#!' className='lastlink2'>https://testnet.xyz.xyz/trade?ref=
</a>
            </Box>
            </Flex>
            
            <Flex mt='5'>
                <Input variant='Filled' className='last-input' placeholder='Enter' />
            </Flex>

            <Flex mt='5'>
                <Button leftIcon={<FiExternalLink />} className='customlink' bg='#3772FF'>
                Custom Link
                </Button>
                <Button leftIcon={<BsBoxArrowInRight />} bg='#242731' className='cancellink'>
                Cancel
                </Button>
            </Flex>

                
           


            
        </Flex>
    )
   
}
