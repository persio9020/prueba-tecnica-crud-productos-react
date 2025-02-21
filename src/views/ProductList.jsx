import React, {useState, useEffect} from "react";
import ModalCombinations from "../components/ModalCombinations"
import ProductService from '../Services/ProductService.js'
import {Link} from 'react-router-dom'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, List} from "reactstrap";

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [showCombination, setShowCombination] = useState(false)
    useEffect(() => {
        ProductService.getAllProducts().then((res) => {
            setProducts(res.data)
        })
    }, []);

    const deleteProduct = id => {
        ProductService.deleteProduct(id)
            .then(() => setProducts(products.filter(p => p.id !== id)))
    }

    const showModalCombinacion = (show=true) => {
        setShowCombination(show)
    }


    return (
        <>
            <Container>
                <h2 className="text-center">Lista de productos</h2>
                <Link to="/add-product" className="btn btn-success">Agregar producto</Link>
                <Button color="primary" onClick={showModalCombinacion} style={{float: "right"}}>Mostrar
                    combinación</Button>
                <div className="row">
                    <Table>
                        <thead>
                        <tr>
                            <th>Nombre del producto</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad en stock</th>
                            <th>Valor total inventario</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.cantidadStock}</td>
                                    <td>{product.valorTotalInventario}</td>
                                    <td>
                                        <Link color="primary" to={`/update-product/${product.id}`}
                                              className="btn btn-info">Actualizar</Link>
                                        <Button color="danger" onClick={() => deleteProduct(product.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            </Container>
            <ModalCombinations showCombination={showCombination} showModalCombinacion={showModalCombinacion}/>

        </>
    )
}

export default ProductList
