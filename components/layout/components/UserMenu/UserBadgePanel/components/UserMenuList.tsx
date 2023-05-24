import React, { ReactNode } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../userBadgePanelInterface';

import { useStyles } from '../styles';

interface IUserMenuProps {
  menuList: IMenuItem[],
  children?: ReactNode 
}

export const UserMenuList = ({ menuList, children }:IUserMenuProps) => {
  const classes = useStyles();
  return (
     <div className={classes.dropdown}>
        <div className={classes.dropdown_body}>
           {children}

           <ul>
              {menuList?.map((item, i) => {
                if (item.linkUrl) {
                  return (
                     <MenuItem
                        key={`${item.title}-${i.toString()}`}
                     >
                        <Link
                           to={item.linkUrl}
                           className={classes.link}
                        >
                           <ListItemIcon>
                              {item?.icon}
                              <span
                                 className={classes.text_item}
                                 role="presentation"
                              >
                                 {item.title}
                              </span>
                           </ListItemIcon>
                        </Link>
                     </MenuItem>
                  );
                }

                return (
                   <MenuItem
                      key={`${item.title}-${i.toString()}`}
                      onClick={item.handlerClick}
                   >
                      <ListItemIcon>
                         {item?.icon}
                         <span
                            className={classes.text_item}
                            role="presentation"
                         >
                            {item.title}
                         </span>
                      </ListItemIcon>
                   </MenuItem>
                );
              })}
           </ul>
        </div>
     </div>
  );
};
