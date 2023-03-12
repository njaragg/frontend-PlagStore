// axios
import axios from 'axios';
//establer la ruta por default
const rutaBase = "http://localhost:8080";


// funcion de llamado
//  Funcion que obtiene 
const getLast15Sales = async function buscarData() {
    const response = await axios.get(rutaBase + "/sales/last15");
    // console.log(response.data);
    return response.data;
};

const getCategoriesSales = async function buscarData() {
    const response = await axios.get(rutaBase + "/categories/sales");
    console.log(response.data);
    return response.data;
};







const getVentasPorCategoria2= async (id) => {
    const respuesta = await axios.get(rutaBase + "/categories/sales");
    console.log(respuesta.data);
    return respuesta.data;
};

export {getLast15Sales, getCategoriesSales}