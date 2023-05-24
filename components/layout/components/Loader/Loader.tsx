import { memo } from 'react';
import { ILoadingProps } from './interfaceLoader';
import LoaderFigure from './components/LoaderFigure';

const Loader = ({
  size = 100,
  blur = true,
  color = 'primary',
  position = 'fixed',
  className,
  padding = 1,
  isShow = false,
}:ILoadingProps) => {
  if (isShow) {
    return (
       <LoaderFigure
          size={size}
          blur={blur}
          color={color}
          position={position}
          className={className}
          padding={padding}
       />
    );
  }
  return null;
};

export default memo(Loader);
