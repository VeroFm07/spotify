import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store/store';
import OFavoritesList from './OFavoritesList';

//Describir la prueba que se este haciendo
describe('Pruebas en OFavoritesList', () => {
    test('Renderiza componente--OFavoritesList', () => {
        const { container } = render(
            <Provider store={store}>
                <OFavoritesList />
            </Provider>
        )

        //Evalua que el container sea igual a lo que contiene el componente
        expect(container).toMatchSnapshot();
    })

})


