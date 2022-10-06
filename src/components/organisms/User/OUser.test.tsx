import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store/store';
import OUser from './OUser';

//Describir la prueba que se este haciendo
describe('Pruebas en OUser', () => {
    test('Renderiza componente--OUser', () => {
        const { container } = render(
            <Provider store={store}>
                <OUser />
            </Provider>
        )

        //Evalua que el container sea igual a lo que contiene el componente
        expect(container).toMatchSnapshot();
    })

})


