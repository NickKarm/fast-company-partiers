import React from "react";

function getStyle(color) {
    return "m-1 badge bg-" + color; //badge badge- не работаетbtn btn-sm
}
function Cell(props) {
    switch (props.index) {
        case 0:
            return <th>{props.partierValue}</th>;

        case 1:
            return (
                <th>
                    {props.partierValue.map((item, index) => {
                        return (
                            <span key={index} className={getStyle(item.color)}>
                                {item.name}
                            </span>
                        );
                    })}
                </th>
            );

        case 2:
            return <th>{props.partierValue.name}</th>;

        case 3:
            return <th>{props.partierValue}</th>;

        case 4:
            return <th>{String(props.partierValue) + "/5"}</th>;

        default:
            return 0;
    }
}
export { Cell };
