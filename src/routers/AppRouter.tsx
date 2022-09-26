import { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom'
import { getToken, setTokenLocalStorage, getTokenLocalStorage, clearHash } from 'utils/helpers';
import { AuthPrivateRouter } from './AuthPrivateRouter'
import { AuthPublicRouter } from './AuthPublicRouter'
export const AppRouter = () => {

  let isAuthenticated: boolean = !!getTokenLocalStorage();

  useEffect(() => {
    const { access_token } = getToken(); // url
    clearHash(); //Limpia la url

    if (access_token !== '' && access_token !== undefined) {
      setTokenLocalStorage(access_token);
    }
  }, [])

  return (
    <Suspense fallback='Cargando...'>
      <BrowserRouter>
        {
          isAuthenticated
            ? <AuthPrivateRouter />
            : <AuthPublicRouter />
        }
      </BrowserRouter>
    </Suspense>

  )
}

export default AppRouter