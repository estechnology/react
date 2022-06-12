import { Avatar, Box, Flex, HStack, Icon , Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData ?: boolean;
}

export function Profile({showProfileData=true} : ProfileProps){
     return(
                              
                <Flex align="center">

                        { showProfileData && (
                           <Box mr="4" textAlign='right'>
                                <Text>Eduardo Sampaio</Text>
                                <Text color="gray.300" fontSize="small">suporte@techbalance.com.br</Text>
                            </Box>
                        )}                        
                        <Avatar size="md" name="Eduardo Sampaio" src="https://avatars.githubusercontent.com/u/107321628?s=400&u=2ada994c49978d3bedc8facd3f4e3efa55161a1b&v=4"/>
                </Flex>                         
                
            );
}