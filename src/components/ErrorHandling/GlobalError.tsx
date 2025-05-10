import { Snackbar, Alert } from '@mui/material';
import { useError } from '../../context/ErrorContext';

export const GlobalError = () => {
  const { error, clearError } = useError();

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={6000}
      onClose={clearError}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={clearError} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
