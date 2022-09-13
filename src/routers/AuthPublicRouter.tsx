import { Navigate, Route, Routes } from 'react-router-dom'
import { routesPublic } from './routers';
export const AuthPublicRouter = () => {
  return (
    <Routes>
      {
        routesPublic.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))
      }
      <Route path='/*' element={<Navigate to={routesPublic[0].to} />} />
    </Routes>
  )
}

export default AuthPublicRouter