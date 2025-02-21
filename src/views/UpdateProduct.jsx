import React, {useEffect, useState} from "react"
import ProductService from '../Services/ProductService.js'
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "reactstrap";

const UpdateProduct = () => {
    const {id} = useParams()
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidadStock, setCantidadStock] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        ProductService.getProductById(id).then(res => {
            const product = res.data
            setNombre(product.nombre)
            setDescripcion(product.descripcion)
            setPrecio(product.precio)
            setCantidadStock((product.cantidadStock))
        })
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        const product = {id, nombre, descripcion, precio, cantidadStock}
        ProductService.updateProduct(product).then(() => {
            navigate('/products')
        })
    }

    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">Actualizar Producto</h3>
                <div className="card-body">
                    <form onSubmit={updateProduct}>
                        <div className="form-group">
                            <label>Nombre del producto: </label>
                            <input placeholder="Nombre" name="nombre" className="form-control"
                                   value={nombre} onChange={e => setNombre(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Descripción del producto: </label>
                            <input placeholder="Descripción" name="descripcion" className="form-control"
                                   value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Precio del producto: </label>
                            <input type="number" placeholder="Precio" name="precio" className="form-control"
                                   value={precio} onChange={e => setPrecio(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Cantidad en Stock: </label>
                            <input type="number" placeholder="Cantidad" name="cantidadStock"
                                   className="form-control"
                                   value={descripcion} onChange={e => setCantidadStock(e.target.value)}/>
                        </div>
                        <Button color="success">Actualizar</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct