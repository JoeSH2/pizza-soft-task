import './app/styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary.tsx';
import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider.tsx';
import { store } from './app/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
