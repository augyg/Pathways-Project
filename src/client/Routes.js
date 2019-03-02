import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

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
      }
    ]
  }  
]