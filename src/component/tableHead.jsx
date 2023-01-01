import React, { useContext } from "react";
import { Cell } from "./cell";
import Context from "./context";

function Heading(props) {
    return (
        <tr>
            {props.columnNames.names.map((name, index) => (
                <th key={props.columnNames.ids[index]}>{name}</th>
            ))}
        </tr>
    );
}

function Rows(props) {
    const { removePartiers } = useContext(Context);
    let partierValues = Object.values(props.partier);
    partierValues.pop();
    let id = partierValues[0];
    partierValues.shift();
    [partierValues[1], partierValues[2]] = [partierValues[2], partierValues[1]];

    return (
        <tr key={id}>
            {partierValues.map((partierValue, index) => (
                <Cell
                    key={id + String(index)}
                    partierValue={partierValue}
                    index={index}
                ></Cell>
            ))}

            <th>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removePartiers(id)}
                >
                    Delete
                </button>
            </th>
        </tr>
    );
}

export { Heading, Rows };
