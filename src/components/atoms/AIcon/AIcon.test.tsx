import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getByAltText, render, screen } from "@testing-library/react";
import React from "react";
import { AIcon } from "./AIcon";

describe('Pruebas en el átomo de icono', () => {
    const icon=faSmile;

    test('Debe de renderizar un icono en el login',()=>{
        const icon=faSmile;

        render(
            <AIcon icon={icon}/>
        )

    })
});