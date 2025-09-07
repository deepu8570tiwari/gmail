import { lazy } from 'react';
const Mains =lazy(()=>import('../pages/Mains'));
const Email =lazy(()=>import('../components/Email'));
const ViewEmail =lazy(()=>import('../components/ViewEmail'));

const routes = {
  main: {
    path: '/',
    element: <Mains />,
  },
  email:{
    path: '/emails',
    element: <Email />,
  },
  invalid: {
    path: '/*',
    element: <Email />,
  },
  view: {
    path: '/view',
    element: <ViewEmail />,
  }
};

export default routes;
