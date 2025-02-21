import React, {useState} from "react"
import ProductService from '../Services/ProductService.js'
import {useNavigate} from "react-router-dom";
import {Button, Container} from "reactstrap";

const AddProduct = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidadStock, setCantidadStock] = useState('')
    const navigate = useNavigate()

    const saveProduct = (e) => {
        e.preventDefault();
        const product = {nombre, descripcion, precio, cantidadStock}
        ProductService.createProduct(product).then(()=>{
            navigate('/products');
        })
    }

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="card col-md-12 offset-md-30">
                        <h3 className="text-center">Agregar Producto</h3>
                        <div className="card-body">
                            <form onSubmit={saveProduct}>
                                <div className="form-group">
                                    <label>Nombre del producto: </label>
                                    <input placeholder="Nombre" name="nombre" className="form-control"
                                    value={nombre} onChange={e=>setNombre(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Descripción del producto: </label>
                                    <input placeholder="Descripción" name="descripcion" className="form-control"
                                          value={descripcion} onChange={e=>setDescripcion(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Precio del producto: </label>
                                    <input type="number" placeholder="Precio" name="precio" className="form-control"
                                          value={precio} onChange={e=>setPrecio(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Cantidad en Stock: </label>
                                    <input placeholder="Cantidad" name="cantidadStock" className="form-control"
                                          value={cantidadStock} onChange={e=>setCantidadStock(e.target.value)}/>
                                </div>
                                <Button type="submit" color="success">Agregar</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AddProduct