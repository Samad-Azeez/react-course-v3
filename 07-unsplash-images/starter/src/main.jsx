import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Initialize React Query client
const queryClient = new QueryClient();

// Render app with necessary providers
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <App />
    </AppProvider>
  </QueryClientProvider>
);
