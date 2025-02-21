import {Button, FormGroup, Modal, ModalBody, ModalHeader} from "reactstrap";
import React, {useState} from "react";
import ProductService from "../Services/ProductService.js";

const ModalCombinations = (props)=>{

    const [valueCombination, setValueCombination] = useState('');
    const [resultCombinations, setResultCombinations] = useState('');

    const closeModalCombinacion = () =>{
        props.showModalCombinacion(false)
        setValueCombination('')
        setResultCombinations('')
    }

    const calculateCombination = () => {
        ProductService.getCombinations(valueCombination)
            .then((res)=> setResultCombinations(JSON.stringify(res.data)))
    }
    return (
        <Modal isOpen={props.showCombination}>
            <ModalHeader>
                <div><h3>Función de mostrar combinaciones</h3></div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <input placeholder="Introduce un valor " className="form-control" value={valueCombination} onChange={e=>setValueCombination(e.target.value)}/>  {" "}
                    <Button color="primary" onClick={calculateCombination}> Calcular combinaciones</Button>
                </FormGroup>
                <FormGroup>
                    <textarea readOnly="true" style={{width: "100%"}} value={resultCombinations}></textarea>
                </FormGroup>
                <Button
                    className="btn btn-danger"
                    onClick={closeModalCombinacion}
                >
                    Cerrar
                </Button>
            </ModalBody>
        </Modal>
    )
}

export default ModalCombinations