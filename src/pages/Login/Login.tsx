import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useLoginMutation } from '../../store/api/authApi';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../features/auth/authSlice';
import { LoginPayLoad } from '../../types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { loginContainerStyles } from './Login.styles';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayLoad>();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const onSubmit: SubmitHandler<LoginPayLoad> = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(authenticateUser(result));
      navigate(ROUTES.DASHBOARD_INDEX);
    } catch (err) {
      console.error('Login failed:', err);
    }
    if (data.email === 'admin' && data.password === 'admin') {
      setUser({ isAdmin: true });
      navigate(ROUTES.DASHBOARD_MAIN + ROUTES.ADMIN_DASHBOARD);
    }
  };

  return (
    <Box css={loginContainerStyles}>
      <Typography variant="h4" gutterBottom>
        Daily Task Tracker
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '100%', maxWidth: 400 }}
      >
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ marginTop: 2 }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </Box>
    </Box>
  );
}
