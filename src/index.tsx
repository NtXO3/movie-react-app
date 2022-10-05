import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from 'context/AuthContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
        cacheTime: 1000 * 6 * 10,
        retry: false,
      },
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
