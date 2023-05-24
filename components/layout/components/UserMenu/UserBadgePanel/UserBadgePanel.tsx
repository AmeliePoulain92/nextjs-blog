import React, { memo, useState, useEffect } from 'react';

import { UserBadge } from './components/UserBadge';
import { UserMenuList } from './components/UserMenuList';
import { UserSubscription } from './components/UserSubscription';
import { IUserBadgePanelProps } from './userBadgePanelInterface';

import { useStyles } from './styles';
import { HttpApi } from '@newsletter/api/HttpApi';

export const UserBadgePanel = ({
  isLoading,
  menuList = [],
}: IUserBadgePanelProps) => {
  const classes = useStyles();

  const [userAvatar, setUserAvatar] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [subscriptions, setSubscriptions] = useState<string[]>([]);
  const [isLoadData, setIsLoadData] = useState<boolean>(false);

  const get = async () => HttpApi.get('/user/GetUserDetails');

  useEffect(() => {
    setIsLoadData(true);
    get().then((res: any) => {
      setUserAvatar(res.headShot || '');
      setUserName(res.userName || '');
      setUserEmail(res.email || '');
      setSubscriptions(res.subscriptionTypes || []);
      setIsLoadData(false);
    });
    setIsLoadData(false);
  }, []);

  return (
     <div className={classes.user_badge_panel}>
        <UserBadge
           avatar={userAvatar}
           userName={userName}
           isLoading={isLoading || isLoadData}
           userEmail={userEmail}
        />

        <UserMenuList menuList={menuList}>
           <>
              <UserSubscription userSubscription={subscriptions} />
           </>
        </UserMenuList>
     </div>
  );
};
