import React from 'react';
import { render } from '@testing-library/react';
import OPlaylist from 'components/organisms/Playlist/OPlaylist';
import { Provider } from 'react-redux';
import store from 'redux/store/store';

//Describir la prueba que se este haciendo
describe('Pruebas en Oplaylist', () => {
  test('Renderiza componente--OPlaylist ', () => {
    const { container } = render(
      <Provider store={store}>
        <OPlaylist />
      </Provider>
    )

    //Evalua que el container sea igual a lo que contiene el componente
    expect(container).toMatchSnapshot();
  })

})


