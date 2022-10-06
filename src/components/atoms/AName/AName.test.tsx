import { render, screen } from '@testing-library/react';
import React from 'react';
import AName from './AName';

describe('Pruebas en el átomo de Name',()=>{
    const className="ejemplo__name";
    const name="Canción";

    test('Debe de renderizar el nombre y la clase por medio de props',()=>{
        render(
            <AName className={className} name={name}/>
        )
        //EVALUA QUE EXISTA LA PROP NAME
        expect(screen.getByText(name)).toBeTruthy();
        
        //EVALUA QUE EL CONTENEDOR FIGURE TENGA LA PROP CLASSNAME
        expect(screen.getByRole('contenedor').innerHTML).toContain(className)

    })
})