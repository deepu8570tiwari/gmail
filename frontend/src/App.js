import './App.css';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import routes from './routes/routes';
import SuspenseLoader from './components/common/SuspenseLoader';
const ErrorComponent =lazy(()=>import('./components/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Redirect root "/" → "/index" */}
        <Route path="/" element={<Navigate to="/emails/inbox" replace />} />
      
      {/* Main routes */}
      <Route path={routes.main.path} element={routes.main.element}>
        <Route path={`${routes.email.path}/:type`} element={routes.email.element}  errorElement={<ErrorComponent/>}/>
        <Route path={routes.view.path} element={routes.view.element}  errorElement={<ErrorComponent/>} /> 
      </Route>

      {/* Catch invalid paths */}
      <Route path="*" element={<Navigate to= { `${routes.email.path}/emails/inbox`}  replace/>}/>
    </Route>
  )
);

function App() {
  return (
  <Suspense fallback={<SuspenseLoader/>}>
    <RouterProvider router={router} />
  </Suspense>
  )
}

export default App;
