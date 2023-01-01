import React, { useState } from "react";
import API from "../api";
import Context from "./context";
import TableCreate from "./table";
//import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
    let [arr, setPartiers] = useState(API.users.fetchAll());
    let partiers = [...arr];

    const numberPartiersMessage = () => {
        let partiersNumber = partiers.length;
        let partiersMessage = "";
        let styleClass = "badge ";

        if (partiersNumber === 0) {
            partiersMessage = "Никто с тобой не тусанет";
            styleClass += "bg-warning";
        } else {
            styleClass += "bg-primary";
            partiersMessage =
                partiersNumber === 1 || partiersNumber > 4
                    ? String(partiersNumber) +
                      " человек тусанет с тобой сегодня"
                    : String(partiersNumber) +
                      " человека тусанут с тобой сегодня";
        }
        return <span className={styleClass}>{partiersMessage}</span>;
    };

    function removePartiers(id) {
        setPartiers(partiers.filter((partier) => partier._id !== id));
    }

    return (
        <>
            <Context.Provider value={{ removePartiers }}>
                <h2>
                    <div>{numberPartiersMessage()}</div>
                </h2>

                <TableCreate partiers={partiers}></TableCreate>
            </Context.Provider>
        </>
    );
};

export default Users;
