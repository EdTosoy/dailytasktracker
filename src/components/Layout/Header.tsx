import { Button } from '@mui/material';
import React from 'react';
import {
  headerButtonContainerStyles,
  headerContainerStyles,
} from './Header.styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../constants';

type Props = {};

export default function Header({}: Props) {
  const navigate = useNavigate();
  const { user, clearUser } = useAuth();

  const handleLogout = () => {
    clearUser();
    navigate(ROUTES.LOGIN);
  };

  return (
    <div css={headerContainerStyles}>
      <div>User name</div>
      <div css={headerButtonContainerStyles}>
        {user?.isAdmin && (
          <Button
            onClick={() =>
              navigate(ROUTES.DASHBOARD_MAIN + ROUTES.ADMIN_WORK_LIST)
            }
          >
            Work Lists
          </Button>
        )}

        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
