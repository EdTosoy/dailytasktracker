import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { Global, ThemeProvider } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import AppRouter from './router';
import globalStyles from './styles/global';
import theme from './styles/theme';
import i18n from './i18n';
import store from './store/store';
import { ErrorBoundary } from './components/ErrorHandling/ErrorBoundary';
import { GlobalError } from './components/ErrorHandling/GlobalError';
import { ErrorProvider } from './context/ErrorContext';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ErrorProvider>
        <AuthProvider>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Global styles={globalStyles} />
              <Provider store={store}>
                <AppRouter />
                <GlobalError />
              </Provider>
            </ThemeProvider>
          </I18nextProvider>
        </AuthProvider>
      </ErrorProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
