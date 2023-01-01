import React from "react";
import { Heading, Rows } from "./tableHead";

const columnNames = {
    names: ["Имя", "Качества", "Профессия", "Встретился, раз", "Оценка", " "],
    ids: [12, 15, 20, 25, 26, 222, 2222],
};

function TableCreate(props) {
    return (
        <table className="table">
            <thead>
                <Heading columnNames={columnNames}></Heading>
            </thead>

            <tbody>
                {props.partiers.map((partier, index) => (
                    <Rows
                        key={partier._id + String(index)}
                        partier={partier}
                    ></Rows>
                ))}
            </tbody>
        </table>
    );
}

export default TableCreate;
