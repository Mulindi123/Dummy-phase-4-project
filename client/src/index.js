import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App"
import {BrowserRouter} from "react-router-dom"
import { SnackbarProvider} from 'notistack'
import { AuthContextProvider } from './components/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <SnackbarProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </SnackbarProvider>  
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals