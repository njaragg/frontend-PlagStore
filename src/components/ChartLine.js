import React, { useEffect, useState } from "react";
import { Card, Title, LineChart } from "@tremor/react";
import { getClientsSales } from "../services/Servicios.js";

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // Mientras haya elementos para mezclar
    while (currentIndex !== 0) {
        // Seleccionar un elemento aleatorio
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambiar el elemento seleccionado con el último elemento restante
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const dataFormatter = (number) =>
    `$${parseInt(number).toLocaleString()}`;

const ChartLine = () => {
    const [sales, setSales] = useState([]);

    const buscarData = async function () {
        const response = await getClientsSales();
        const newResponse = response.map((item) => {
            return {
                nombreCliente: item[0],
                totalVendido: item[1],
                "Ventas realizadas": item[2],
                "Promedio de venta": item[3],
            };
        });

        setSales(newResponse);
        console.log(newResponse);
    };

    useEffect(function () {
        buscarData();
    }, []);
    return (
        <Card>
            <Title>Promedio de venta por cada cliente</Title>
            <LineChart
                data={sales}
                dataKey="nombreCliente"
                categories={["Promedio de venta"]}
                colors={["blue"]}
                marginTop="mt-6"
                yAxisWidth="w-15"
                autoMinValue="true"
                valueFormatter={dataFormatter}
            />
        </Card>
    );
};

export default ChartLine;
