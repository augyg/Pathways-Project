import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

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
        ...CreateAccountPage,
        path: '/create'
      }
    ]
  }  
]