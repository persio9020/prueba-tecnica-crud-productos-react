import React from "react";
import {Button, Modal, ModalBody, ModalHeader} from "reactstrap";

const ModalDatosGatos = (props) => {
    const closeModal = () =>{
        props.closeModal()
    }
    return (
        <Modal isOpen={props.showDatosGatos}>
            <ModalHeader>Sabias que ..</ModalHeader>
            <ModalBody>
                <ul>
                    {

                        (typeof props.datos !== 'undefined') ? props.datos.map((dato) => {
                            return <li key={dato}>{dato}</li>;
                        }):"<Nada>"

                    }

                </ul>

                <Button
                    className="btn btn-danger"
                    onClick={closeModal}
                >
                    Cerrar
                </Button>
            </ModalBody>
        </Modal>
    )

}

export default ModalDatosGatos