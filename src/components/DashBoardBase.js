import { Block, Card, ColGrid, Tab, TabList, Text, Title } from '@tremor/react'
import React, { useState } from 'react'
import BarChart from './BarChart'
import CardGridMap from './CardGridMap'
import ChartDonut from './ChartDonut'
import TableBase from './TableBase'

const DashBoardBase = () => {
    const[selectedView, setSelectedView]= useState(1)
  return (
    
    <main className='bg-slate-200 p-6 sm:p-10'>
        <Title>Dashboard</Title>
        <Text>Ejemplo de Dashboard</Text>

        <TabList 
            defaultValue={selectedView}
            handleSelect={value => setSelectedView(value)}
            marginTop="mt-6"
        >
            <Tab value={1} text="Principal"></Tab>
            <Tab value={2} text="Registros"></Tab>
            <Tab value={3} text="Registros"></Tab>
        </TabList>

        {selectedView === 1 ? (
        //if que contiene la pestaña principal, los 4 cuadros y el grafico de abajo
        <>
        
        <CardGridMap></CardGridMap>
        {/* grafico  */}
        <Block marginTop='mt-6'>
            {/* <ChartDonut></ChartDonut> */}
            <BarChart></BarChart>
        </Block>
        </>
        

    ) : (selectedView === 2 ? (
        //else
        // Segunda pestaña, en este caso los registros
        <Block marginTop='mt-6'>
            <Card>
                <TableBase></TableBase>
            </Card>

        </Block>
        ) : (
            <><Card>
                <ChartDonut></ChartDonut>
            </Card></>
        )

    )

        




    }
    </main>
  )
}

export default DashBoardBase
