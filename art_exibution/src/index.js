import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Gallary from "./components/gallary";
import Exibution from "./components/exibution";
import About from "./components/about";
import Login from "./components/Login";
import Premium from "./components/PremiumContent";
import Register from "./components/Register";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { getUser, getToken, setUserSession, resetUserSession } from './service/AuthService'; 
import axios from 'axios';

const verifyTokenAPIUrl = 'https://47ei87a609.execute-api.ap-south-1.amazonaws.com/production/verify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/gallary',
    element: <Gallary />
  },
  {
    path: '/exibution',
    element: <Exibution />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <Register /> 
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />  
      </PublicRoute>
    ),
  },
  {
    path: '/premium-content',
    element: (
      <PrivateRoute>
        <Premium />  
      </PrivateRoute>
    ),
  },
]);

const AppWithTokenVerification = () => {
  const [isAuthenticating, setAuthenticating] = useState(true); 
  const [isAuthenticated, setAuthenticated] = useState(false); 

  if (isAuthenticated){
    
  }
  useEffect(() => {
    const token = getToken();

    if (token === 'undefined' || token === undefined || token === null || !token) {
      setAuthenticating(false);
      return; 
    }

    const requestConfig = {
      headers: {
        'x-api-key': 'eKHDyuG6Rv413MJod4rIk8t0B5WL13LY7O0UdXNe',
      },
    };

    const requestBody = {
      user: getUser(),
      token: token,
    };

    axios.post(verifyTokenAPIUrl, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        setAuthenticated(true); 
      })
      .catch(() => {
        resetUserSession();
        setAuthenticated(false); 
      })
      .finally(() => {
        setAuthenticating(false);
      });
  }, []);

  
  if (isAuthenticating) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    ) 
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWithTokenVerification />);

export default AppWithTokenVerification;