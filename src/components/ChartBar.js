import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { getProductsSales } from "../services/Servicios.js";

function ChartBar() {
    const [sales, setSales] = useState([]);

    const buscarData = async function () {
        const response = await getProductsSales();
        const newResponse = response.map((item) => {

            // replace() usando una expresión Regex para reemplazar espacios en blanco
            let procesado = item[1].replace(/\s+/g, ""); // > "Textodeejemplo"
            if (procesado==='Setlimpieza') {
                procesado='Limpieza'
                
            }
            if (procesado==='Audífonos') {
                procesado='Audifono'
                
            }
            return {
                categoria: item[0],
                nombreProducto: procesado,
                vendidos: item[2],
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
            <Title>Numero de ventas por producto</Title>
            <Subtitle>
                Numero de ventas de cada producto de la tienda plagstore,
                ordenados del mas vendido, al menos vendido
            </Subtitle>
            <BarChart
                data={sales}
                dataKey="nombreProducto"
                categories={["vendidos"]}
                colors={["teal"]}
                height="h-96"
                marginTop="mt-6"
                yAxisWidth="w-5"
                layout="horizontal"
            />
        </Card>
    );
}

export default ChartBar;
