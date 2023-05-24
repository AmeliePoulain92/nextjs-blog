"use client";

import React, { useEffect, useState } from 'react';
import { Logout, Login } from '@mui/icons-material';
import cookie from 'js-cookie';
import { cookieNames } from '@newsletter/constants/cokieNames';
import { UserBadgePanel } from './UserBadgePanel';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

// interface IHeaderRightSideProps {}
export const UserMenu = () => {
  const classes = useStyles();
  const [isLogIn, setIsLogIn] = useState<boolean>(true);

  const logOut = () => {
    window.location.reload();
    if (process.env.NODE_ENV === 'production') {
      document.cookie = 'bevnet_auth_token=; Path=/;domain=.bevnet.com; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    cookie.remove(cookieNames.bevnet_token);
    cookie.remove(cookieNames.refresh_token);
    setIsLogIn(true);
  };

  const redirect = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_AUTH_URL}?returnUrl=${window.location.href}`;
  };
  useEffect(() => {
    if (cookie.get(cookieNames.bevnet_token)) {
      setIsLogIn(false);
      return;
    }
    setIsLogIn(true);
  }, []);

  return (
     <div className={classes.right_side}>
        {isLogIn ? (
           <Button
              onClick={redirect}
              variant="contained"
             // startIcon={<Login />}
           >
              Log In
           </Button>
        ) : (
           <UserBadgePanel
              menuList={[
                {
                  title: 'Log Out',
                  icon: <Logout />,
                  handlerClick: logOut
                },
              ]}
           />
        )}
     </div>
  );
};
