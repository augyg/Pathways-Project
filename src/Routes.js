import App from './containers/index';
import HomePage from './containers/Home';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';
import Profile from './containers/Profile';

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
      },
      {
        ...Profile,
        path: '/profile'
      }
    ]
  }  
]