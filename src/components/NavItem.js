import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
} from '@chakra-ui/react'


export default function NavItem({ icon, title, active, navSize }) {
    return (
        <Flex
            mt={5}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#353945"}
                    color={active && "white"}
                    p={3}
                    borderRadius={8}
                    textDecoration='none'
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "white" : "#808191"} />
                            <Text ml={5} color="#808191" display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
               
            </Menu>
        </Flex>
    )
}