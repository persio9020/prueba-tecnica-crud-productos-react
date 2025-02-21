import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";

const Table = ({ caption, data, columns, deleteProduct }) => {
    const [tableData, handleSorting] = useSortableTable(data, columns);

    return (
        <>
            <table className="table">
                <caption>{caption}</caption>
                <TableHead {...{ columns, handleSorting}}/>
                <TableBody {...{ columns, tableData}} deleteProduct={deleteProduct} key={data[0]}/>
            </table>
        </>
    );
};

export default Table;