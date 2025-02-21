import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const TableBody = ({ tableData, columns, deleteProduct }) => {


    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({ accessor }, index) => {
                        if(index<5){
                            const tData = data[accessor] ? data[accessor] : "——";
                            return <td key={accessor}>{tData}</td>;
                        } else{
                            return <td key={accessor}>
                                <Link color="primary" to={`/update-product/${data.id}`}
                                      className="btn btn-info">Actualizar</Link>
                                <Button color="danger" onClick={() => deleteProduct(data.id)}>
                                    Eliminar
                                </Button>;
                            </td>
                        }
                    })}

                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;