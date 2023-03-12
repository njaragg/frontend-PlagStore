// axios
import axios from 'axios';
//establer la ruta por default
const rutaBase = "http://ec2-3-14-132-242.us-east-2.compute.amazonaws.com";


// funcion de llamado
//  Funcion que obtiene 
const getLast15Sales = async function buscarData() {
    const response = await axios.get(rutaBase + "/sales/last15");
    // console.log(response.data);
    return response.data;
};

const getCategoriesSales = async function buscarData() {
    const response = await axios.get(rutaBase + "/categories/sales");
    // console.log(response.data);
    return response.data;
};

const getProductsSales = async function buscarData() {
    const response = await axios.get(rutaBase + "/products/sales");
    // console.log(response.data);
    return response.data;
}
const getClientsSales = async function buscarData() {
    const response = await axios.get(rutaBase + "/clients/sales");
    // console.log(response.data);
    return response.data;
}





;

export {getLast15Sales, getCategoriesSales, getProductsSales,getClientsSales}