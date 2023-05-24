import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import { IUserSubscription } from '../userBadgePanelInterface';

export const UserSubscription = ({ userSubscription = [] }:IUserSubscription) => {
  const classes = useStyles();

  if (!userSubscription?.length) {
    return null;
  }
  return (
     <div className={classes.user_subscription_wrapper}>
        <Typography variant="subtitle1">
           Subscription:
        </Typography>
        <Typography
           color="error"
           component="span"
        >
           {userSubscription?.length && userSubscription.join(' - ')}
        </Typography>
     </div>
  );
};
