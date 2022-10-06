import { faHome } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import React from "react";
import ALink from "./ALink";

describe('Pruebas en el átomo de link',()=>{
    const type="a";
    const name="Prueba Link";
    const link="./inicio";
    
    test('Debe de renderizar un link con sus props respectivas',()=>{
        render(
            <ALink link={link} name={name} type={type} />
        );
        
        //EVALUA QUE EL COMPONENTE CONTENGA EL TIPO DEL LINK
        expect(screen.getByRole('contenedor').innerHTML).toContain(type)
    })
})