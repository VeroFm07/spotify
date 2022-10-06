import { render, screen } from "@testing-library/react";
import React from "react";
import AImage from "./AImage";

describe('Pruebas en el átomo de imagen', () => {
    const className = "ejemplo";
    const urlImg = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png";

    test('Debe de renderizar la imagen y la clase por medio de props', () => {
        render(
            <AImage className={className} urlImg={urlImg} />
        );

        //EVALUA QUE EL CONTENEDOR->FIGURE: CONTENGA PROPS
        expect(screen.getByRole('contenedor').innerHTML).toContain(className)
        expect(screen.getByRole('contenedor').innerHTML).toContain(urlImg)
    });
})