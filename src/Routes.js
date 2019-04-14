import App from './containers/index';
import HomePage from './containers/Home';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...LoginPage,
        path: '/login'
      },
      {
        ...RegisterPage,
        path: '/register'
      }
    ]
  }  
]