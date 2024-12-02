import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient(); // Create a client instance to be used by the QueryClientProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the App component with the QueryClientProvider and pass the client instance as a prop
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
