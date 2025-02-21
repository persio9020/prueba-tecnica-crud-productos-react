import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import ProductList from "../views/ProductList.jsx";
import AddProduct from "../views/AddProduct.jsx";
import UpdateProduct from "../views/UpdateProduct.jsx";

const NavigationBar = () => {

    return (
        <Router>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="/">Productos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Incio</Nav.Link>
                        <Nav.Link as={Link} to="/products">Lista de Productos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/add-product" element={<AddProduct/>}/>
                <Route path="/update-product/:id" element={<UpdateProduct/>}/>
            </Routes>
        </Router>
            );
};
const Home = () => <div>Home</div>;
const Products = () => <div>Lista de Productos</div>
    export default NavigationBar;