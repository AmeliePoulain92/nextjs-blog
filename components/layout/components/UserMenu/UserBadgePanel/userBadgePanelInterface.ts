import { ReactNode } from 'react';

export interface IUserBadge {
  avatar?: string,
  userName?: string
  userEmail?: string
  isLoading?: boolean,
}

export interface IMenuItem {
  title: string,
  icon?: ReactNode,
  linkUrl?: string,
  handlerClick?: () => void
}

export interface IUserSubscription {
  userSubscription?: string[]
}

export interface IUserBadgePanelProps extends IUserSubscription {
  menuList?: IMenuItem[],
  isLoading?: boolean
}
