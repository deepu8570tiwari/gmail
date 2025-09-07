import Mains from '../pages/Mains';
import Email from '../components/Email';

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
    path: '/*',
    element: <Email />,
  }
};

export default routes;
