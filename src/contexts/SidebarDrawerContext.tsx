import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Children, createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps{
    children: ReactNode;
}
type SidebarDrawerContextData = UseDisclosureReturn

const SidarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children} : SidebarDrawerProviderProps){

    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {disclosure.onClose()}, [router.asPath])
    
    return(
        <SidarDrawerContext.Provider value={disclosure}>
            {children}
        </SidarDrawerContext.Provider>
    );
}

export const UseSidebarDrawer = () => useContext(SidarDrawerContext)