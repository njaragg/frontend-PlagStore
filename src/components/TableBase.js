import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React, { useEffect, useState } from 'react'
import {CameraIcon} from '@heroicons/react/24/solid'
import {getLast15Sales, getCategoriesSales} from "../services/Servicios.js";


const TableBase = () => {
    const [sales, setSales] = useState([]);
    
    const buscarData = async function(){
        const response = await getLast15Sales();
        const newResponse = response.map((item) => {
            let estado, color;
            if (item[7] === 0) {
                estado='Pagado'
                color= 'teal'
                
            }
            else if (item[7] === 1) {
                estado='Pendiente'
                color= 'amber'
            }
            else if (item[7] === 2) {
                estado="Cancelado"
                color= 'red'
            }

            return {
                fecha: item[0],
                cliente: item[1],
                producto: item[2],
                cantidad: item[3],
                precioUnitario: item[4],
                total: item[5],
                categoria: item[6],
                estado: estado,
                color: color
            };
        });

        setSales(newResponse);
    }

    useEffect(() => {
        buscarData();
    }, []);



    return (
        <Card>
            <Title>Ultimas 15 ventas</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell textAlignment='text-center'>Fecha</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Cliente</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Prodcuto</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Cantidad</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Precio Unitario</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Total</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Categoria</TableHeaderCell>
                        <TableHeaderCell textAlignment='text-center'>Estado</TableHeaderCell>
                        
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {
                    sales.map((item) => (
                        <TableRow>
                            <TableCell textAlignment='text-center'>{item.fecha.slice(0, 10)}</TableCell>
                            <TableCell textAlignment='text-center'>{item.cliente}</TableCell>
                            <TableCell textAlignment='text-center'>{item.producto}</TableCell>
                            <TableCell textAlignment='text-center'>{item.cantidad}</TableCell>
                            <TableCell textAlignment='text-center'>{item.precioUnitario}</TableCell>
                            <TableCell textAlignment='text-center'><b>{item.total}</b></TableCell>
                            <TableCell textAlignment='text-center'>{item.categoria}</TableCell>
                            <TableCell textAlignment='text-center'><Badge text={item.estado} color={item.color} /></TableCell>
                        </TableRow>

                    ))
                    }
                </TableBody>
                <>
                </>

            </Table>
        </Card>
    )
}

export default TableBase