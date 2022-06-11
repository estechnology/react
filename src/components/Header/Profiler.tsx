import { Avatar, Box, Flex, HStack, Icon , Text } from "@chakra-ui/react";

export function Profile(){
     return(
                              
                <Flex align="center">
                        <Box mr="4" textAlign='right'>
                            <Text>Eduardo Sampaio</Text>
                            <Text color="gray.300" fontSize="small">suporte@techbalance.com.br</Text>
                        </Box>
                        <Avatar size="md" name="Eduardo Sampaio" src="https://gitbub.com/diego3g.png"/>
                </Flex>                         
                
            );
}