import { Block, Card, Tab, TabList, Text, Title } from "@tremor/react";
import {DocumentTextIcon, DocumentChartBarIcon} from '@heroicons/react/24/outline'
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartBar from "./ChartBar";
import ChartLine from "./ChartLine";
import TableBase from "./TableBase";


const DashBoardBase = () => {
    const [selectedView, setSelectedView] = useState(1);
    return (
        <main className="bg-slate-200 p-6 sm:p-10">
            <Title>Plag Store</Title>
            <Text>Tu tienda de conveniencia</Text>

            <TabList
                defaultValue={selectedView}
                handleSelect={(value) => setSelectedView(value)}
                marginTop="mt-4"
                color="stone"
            >
                <Tab icon={DocumentChartBarIcon} value={1} text="Principal"></Tab>
                <Tab icon={DocumentTextIcon} value={2} text="Registros de ventas"></Tab>
            </TabList>

            {selectedView === 1 ? (
                //if que contiene la pestaña principal, los 4 cuadros y el grafico de abajo
                <>
                    <CardGridMap></CardGridMap>
                    {/* grafico  */}
                    <Block marginTop="mt-6">
                        {/* <ChartDonut></ChartDonut> */}
                        <ChartBar></ChartBar>
                    </Block>
                    <Block marginTop="mt-6">
                        <ChartLine></ChartLine>
                    </Block>
                </>
            ) : (
                //else
                // Segunda pestaña, en este caso los registros
                <Block marginTop="mt-6">
                    <Card>
                        <TableBase></TableBase>
                    </Card>
                </Block>
            )}
        </main>
    );
};

export default DashBoardBase;
