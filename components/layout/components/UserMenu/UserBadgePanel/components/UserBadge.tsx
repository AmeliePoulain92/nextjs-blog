import React from 'react';
import { Avatar, Typography, useMediaQuery } from '@material-ui/core';
import { useStyles } from '../styles';
import { IUserBadge } from '../userBadgePanelInterface';
import Loader from '../../../Loader';

export const UserBadge = ({ userName, isLoading, avatar, userEmail }: IUserBadge) => {
  const isDesktop: boolean = useMediaQuery('(min-width:992px)');
  const classes = useStyles();
  return (
     <div className={classes.user_badge}>
        {!isLoading ? (
           <Avatar
              src={avatar || ''}
           />
        ) : (
           <Loader
              size={30}
              position="relative"
              isShow={isLoading}
           />
        )}

        {isDesktop && (
        <div className={classes.user_info_wrapper}>
           <Typography
              variant="h6"
              className={classes.user_name}
           >
              {!isLoading && userName}
           </Typography>
           <Typography
              variant="subtitle2"
              className={classes.user_email}
           >
              {!isLoading && userEmail}
           </Typography>
        </div>
        )}
     </div>
  );
};
