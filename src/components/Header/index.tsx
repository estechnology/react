import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { UseSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { Notification } from './Notification';
import { Profile } from './Profiler';
import { SeachBox } from './SearchBox';

export function Header(){

    const { onOpen } = UseSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
            <Flex
                as="header"
                w='100%'
                maxWidth={1480}    
                h="20"
                mx="auto"
                mt="4"
                px="6"
                align="center"
            >
                    { !isWideVersion &&(
                        <IconButton
                            aria-label='Open navigation'
                            icon={<Icon as={RiMenuLine}/>}
                            fontSize="24"
                            variant="unstyled"
                            onClick={onOpen}
                            mr="2"
                        >

                        </IconButton>
                    )}

                    <Logo />

                    {/* se tiver no mobile nao aparece a pesquisa*/}
                    { isWideVersion && <SeachBox />}
                    
                    <Flex
                        align="center"
                        ml="auto"
                    >  
                        <Notification />
                        {/* envia isWideVersion com as caractristicas para limitar as informações*/}
                        <Profile showProfileData={isWideVersion}/>
                    </Flex>                    
            </Flex>
    );
}