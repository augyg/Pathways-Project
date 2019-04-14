import App from './scenes/index';
import HomePage from './scenes/Home';
import LoginPage from './scenes/Login';
import RegisterPage from './scenes/Register';
import Profile from './pages/Profile';

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