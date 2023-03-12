import { BadgeDelta, Block, Card, ColGrid, Divider, Flex, Metric, ProgressBar, Text } from '@tremor/react'
import React, { useEffect, useState } from 'react'
import { getCategoriesSales } from '../services/Servicios';

const data = [
    {
        title: 'Sales',
        metric: '$ 12,699',
        progress: 15.9,
        target: '$ 80,000',
        delta: '13.2%',
        deltaType: 'moderateIncrease',
    },
    {
        title: 'Profit',
        metric: '$ 45,564',
        progress: 36.5,
        target: '$ 125,000',
        delta: '23.9%',
        deltaType: 'increase',
    },
    {
        title: 'Customers',
        metric: '1,072',
        progress: 53.6,
        target: '2,000',
        delta: '10.1%',
        deltaType: 'moderateDecrease',
    },
    {
        title: 'Customers',
        metric: '1,072',
        progress: 53.6,
        target: '2,000',
        delta: '10.1%',
        deltaType: 'moderateDecrease',
    }
]


const CardGridMap = () => {

    const [sales, setSales] = useState([]);
    
    const buscarData = async function(){
        const response = await getCategoriesSales();
        const newResponse = response.map((item) => {
            let numeroFormateado= `$${parseInt(item[4]).toLocaleString()}`;

            return {
                categoria_id: item[0],
                categoria: item[1],
                ventas: item[2],
                totalProductosVendidos: item[3],
                dineroTotal: numeroFormateado
            };
        });
        
        setSales(newResponse);
    }

    useEffect(() => {
        buscarData();
    }, []);



    return (
        <ColGrid  numColsMd={2} numColsLg={4} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6'>
            {sales.map( (item)=>(
                <Card key={ item.categoria }>
                <Flex alignItems="items-start">
                    <Text><b>{item.categoria}</b></Text>
                    <BadgeDelta deltaType={ item.deltaType } text={ item.delta } />
                </Flex>
                <Flex
                    justifyContent="justify-start"
                    alignItems="items-baseline"
                    spaceX="space-x-3"
                    truncate={ true }
                >
                    <Metric>{ item.ventas }</Metric>
                    <Text truncate={ true }> ventas realizadas
                    </Text>
                </Flex>
                <Divider />
                    <Flex marginTop='mt-2' spaceX='space-x-2'>
                        <Text>Ventas totales</Text>
                        <Text><b>{item.dineroTotal}</b></Text>
                    </Flex>
                    <Flex marginTop='mt-2' spaceX='space-x-2'>
                        <Text>Productos vendidos</Text>
                        <Text><b>{item.totalProductosVendidos}</b></Text>
                    </Flex>
            </Card>
            ))}

        </ColGrid>
    )
}

export default CardGridMap