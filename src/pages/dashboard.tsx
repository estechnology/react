import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from 'apexcharts';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'),{
    ssr:false,
});

const options : ApexOptions ={
    chart:{
        toolbar:{
            show:false,
        },
        zoom:{
            enabled:false,
        },
        foreColor: theme.colors.gray[500],        
    },
    grid:{
        show:false,
    },
    stroke:{
        curve: 'smooth'
    },
    tooltip:{
        enabled:false,
    },
    xaxis:{
        type: 'datetime',
        axisBorder:{
            color:theme.colors.gray[600]
        },
        axisTicks:{
            color:theme.colors.gray[600]
        },
        categories:[            
            '2022-06-02T00:00:00.000Z',
            '2022-06-03T00:00:00.000Z',
            '2022-06-04T00:00:00.000Z',
            '2022-06-05T00:00:00.000Z',
            '2022-06-06T00:00:00.000Z',            
            '2022-06-07T00:00:00.000Z',            
            '2022-06-08T00:00:00.000Z',            
        ],
    },
    fill:{
        opacity: 0.3,
        type: 'gradient',
        gradient:{
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};

const series = [
    {name: 'series1', data:[31,120,54,417,2,14,500]}
];

export default function Dashboard(){
    return(
        <Flex direction="column" h="100vh">
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar></Sidebar>
                
                {/* flex 1 para pegar o que sobra de espaço*/}
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                        <Box
                            p="8"
                            bg="gray.800"
                            borderRadius={8}
                            pb="4"
                        >
                            <Text fontSize="lg" mb="4">TechSafe realizados na semana</Text>
                            <Chart options={options} series={series} type="area" height={160}/>
                        </Box>
                        <Box
                            p="8"
                            bg="gray.800"
                            borderRadius={8}
                        >
                            <Text fontSize="lg" mb="4">TechSports realizados na semana</Text>
                            <Chart options={options} series={series} type="area" height={160}/>
                        </Box>
                </SimpleGrid>
            </Flex>
       </Flex>
    )
}