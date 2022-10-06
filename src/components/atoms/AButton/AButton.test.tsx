import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import React from "react";
import AButton from "./AButton";

describe('Pruebas en el átomo de botón', () => {
    
    const className = "button__ejemplo";
    const name = "Nombre botón";
    const onClick = () =>{
        const nombre= "HOLA";
        return nombre;
    }

    test('Debe de renderizar un botón con sus props', () => {
        render(
            <AButton isIcon={true} className={className} onClick={onClick} name={name} />
        );
        
        //EVALUA QUE EL CONTENEDOR DE BOTÓN TENGA LA PROP DEL NAME
        expect(screen.getByRole('contenedor').innerHTML).toContain(name)
       
    })  
});