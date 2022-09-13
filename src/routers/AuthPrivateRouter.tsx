import { Navigate, Route, Routes } from 'react-router-dom'
import { routesPrivate } from './routers';

export const AuthPrivateRouter = () => {
  return (
    <Routes>
      {
        routesPrivate.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))
      }
      <Route path='/*' element={<Navigate to={routesPrivate[0].to} />} />
    </Routes>
  )
}

export default AuthPrivateRouter