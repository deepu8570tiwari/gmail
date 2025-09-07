import './App.css';
import Mains from './pages/Mains';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import routes from './routes/routes';
import ErrorComponent from './components/common/ErrorComponent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Redirect root "/" → "/index" */}
      <Route path={routes.main.path} element={<Navigate to={`${routes.main.path}/inbox`} />} />
      
      {/* Main routes */}
      <Route path={routes.main.path} element={routes.main.element}>
        <Route path={`${routes.main.path}/:type`} element={routes.main.element}  errorElement={<ErrorComponent/>}/>
        <Route path={routes.view.path} element={routes.view.element}  errorElement={<ErrorComponent/>} /> 
      </Route>

      {/* Catch invalid paths */}
      <Route path={routes.invalid.path} element={<Navigate to= { `${routes.email.path}/inbox`} />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
