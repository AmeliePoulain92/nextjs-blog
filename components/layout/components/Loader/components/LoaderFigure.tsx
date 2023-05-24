import React from 'react';
import clsx from 'clsx';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from '../styles';
import { ILoadingProps } from '../interfaceLoader';

// interface ILoaderFigureProps {}
const LoaderFigure = ({
  size = 24,
  blur = false,
  color = 'primary',
  position = 'relative',
  className,
  padding = 0
}:ILoadingProps) => {
  const classes = useStyles();
  return (
     <div
        className={clsx(classes.wrapper_loading, {
          [classes.blur]: blur
        }, className)}
        style={{ position, padding: `${padding}rem` }}
     >
        <CircularProgress
           size={size}
           className={clsx({
             [classes.primary]: color === 'primary',
             [classes.light]: color === 'light',
           })}
        />
     </div>
  );
};

export default LoaderFigure;
