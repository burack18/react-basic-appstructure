import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';

import { router } from './core/routes';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <RouterProvider router={router} />
    </Container>
    <ToastContainer />
  </React.StrictMode>
);

