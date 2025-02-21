import React, {useState, useEffect} from "react";
import ModalCombinations from "../components/ModalCombinations"
import ModalDatosGatos from "../components/ModalDatosGatos";
import DatoInutilDia from "../components/DatoInutilDia";
import ProductService from '../Services/ProductService'
import {Link, useNavigate} from 'react-router-dom'
import {Button, Container} from "reactstrap";
import Table from "../components/Table";
import GatosService from "../Services/GatosService";
import DatoInutilService from "../Services/DatoInutilService";

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [showCombination, setShowCombination] = useState(false)
    const navigate = useNavigate()
    const [datosGatos, setDatosGatos] = useState([])
    const [showDatosGatos, setShowDatosGatos] = useState(false)
    const [datoInutil, setDatoInutil] = useState('');

    useEffect( () => {
        async function fetchData() {
            const [res, datoGato, datoInutil] = await Promise.all([
                ProductService.getAllProducts(),
                GatosService.getDatosGatos(2),
                DatoInutilService.getDato()
            ])

            setDatoInutil(datoInutil.data.text)
            setDatosGatos(datoGato.data.data)
            setShowDatosGatos(true)
            setProducts(res.data)

        }
        fetchData()
    }, []);

    const deleteProduct = id => {
        ProductService.deleteProduct(id)
            .then(() => {
                navigate(0);
            })
    }

    const showModalCombinacion = (show = true) => {
        setShowCombination(show)
    }
    const closeModal = () => {
        setShowDatosGatos(false)
    }

    const columns = [
        {label: "Nombre del producto", accessor: "nombre", sortable: true},
        {label: "Descripción", accessor: "descripcion", sortable: true},
        {label: "Precio", accessor: "precio", sortable: true},
        {label: "Cantidad en stock", accessor: "cantidadStock", sortable: true},
        {label: "Valor total inventario", accessor: "valorTotalInventario", sortable: true},
        {label: "Opciones", accessor: "opciones", sortable: false},
    ];

    if (typeof products !== 'undefined' && products.length > 0) {
        return (
            <>
                <ModalDatosGatos showDatosGatos={showDatosGatos} closeModal={closeModal} datos={datosGatos}/>
                <Container>
                    <h2 className="text-center">Lista de productos</h2>
                    <Link to="/add-product" className="btn btn-success">Agregar producto</Link>
                    <Button color="primary" onClick={showModalCombinacion} style={{float: "right"}}>Mostrar
                        combinación</Button>
                    <div className="row">
                        <Table caption="List of developers with an affordable course (has no default sorting)."
                               data={products}
                               columns={columns} deleteProduct={deleteProduct}/>

                    </div>
                </Container>

                <ModalCombinations showCombination={showCombination} showModalCombinacion={showModalCombinacion}/>
                <DatoInutilDia datoInutil={datoInutil}/>
            </>
        )
    }

}

export default ProductList
