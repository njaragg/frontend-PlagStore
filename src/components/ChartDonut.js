import { Card, DonutChart, Title } from '@tremor/react'
import React from 'react'
const cities = [
    {
        name:'new york',
        sales:9800
    },
    {
        name:'japon',
        sales:980
    },    {
        name:'santaigo',
        sales:20000
    }
]


const ChartDonut = () => {
    return (
    <Card>
        <Title>Sales by city</Title>
        <DonutChart 
            data={cities}
            category='sales'
            dataKey='name'
            marginTop=''
            >
            

        </DonutChart>
    </Card>
    
    )
}

export default ChartDonut