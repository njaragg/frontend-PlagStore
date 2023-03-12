import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, TextInput, Title } from '@tremor/react'
import React, { useEffect, useState } from 'react'
import {CheckIcon, ExclamationCircleIcon,XMarkIcon} from '@heroicons/react/24/outline'
import {getLast15Sales} from "../services/Servicios.js";


const TableBase = () => {
    const [sales, setSales] = useState([]);
    const [search,setSearch] = useState("")

    const buscarData = async function(){
        const response = await getLast15Sales();
        const newResponse = response.map((item) => {
            let estado, color, icon;
            if (item[7] === 0) {
                estado='Pagado'
                color= 'teal'
                icon=CheckIcon
                
            }
            else if (item[7] === 1) {
                estado='Pendiente'
                color= 'amber'
                icon=ExclamationCircleIcon
            }
            else if (item[7] === 2) {
                estado="Cancelado"
                color= 'red'
                icon=XMarkIcon
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
                color: color,
                icon:icon
            };
        });

        setSales(newResponse);
    }

    //funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
        // console.log(e.target.value)
    }
    

    //metodo de filtrado
    let filtrados=[]
    if (!search) {
        filtrados=sales
    }
    else{
        filtrados = sales.filter( (dato) => dato.cliente.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }







    useEffect(() => {
        buscarData();
    }, []);



    return (
        <Card>
            <Title>Ultimas 15 ventas</Title>
            <TextInput marginTop='mt-4' maxWidth='max-w-xs' placeholder="Buscar por nombre del cliente..." value={search} onChange={searcher}/>
            <Table marginTop='mt-4'>
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
                    filtrados.map((item) => (
                        <TableRow>
                            <TableCell textAlignment='text-center'>{item.fecha.slice(0, 10)}</TableCell>
                            <TableCell textAlignment='text-center'>{item.cliente}</TableCell>
                            <TableCell textAlignment='text-center'>{item.producto}</TableCell>
                            <TableCell textAlignment='text-center'>{item.cantidad}</TableCell>
                            <TableCell textAlignment='text-center'>{item.precioUnitario}</TableCell>
                            <TableCell textAlignment='text-center'><b>{item.total}</b></TableCell>
                            <TableCell textAlignment='text-center'>{item.categoria}</TableCell>
                            <TableCell textAlignment='text-center'><Badge text={item.estado} color={item.color} icon={item.icon} /></TableCell>
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