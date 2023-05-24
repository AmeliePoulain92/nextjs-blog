interface WHSizeProps {
    width: number | string;
    minWidth: number | string;
    height?: number | string;
  }
  
  export const mixin = {
    br: (color: 'red' | '#E5E5E5' | '#F8F8F8' | '#C9C9C9' | string = 'red') => ({
      border: `1px solid ${color}`,
    }),
    bg: (color: string = '#F8F8F8') => ({
      background: color,
    }),
    flex: (
      y: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'center',
      x:
      | 'flex-start'
      | 'center'
      | 'flex-end'
      | 'space-between'
      | 'space-evenly' = 'flex-start'
    ) => ({
      display: 'flex',
      alignItems: y,
      justifyContent: x,
    }),
  
    overlayBlock: (
      bg: string = 'rgba(35,35,35,0.66)',
      opacity: number = 4,
      position: string = 'absolute',
      other: any = {}
    ) => {
      const b = bg && {
        background: bg,
      };
  
      const o = opacity
        ? {
          opacity: `.${opacity}`,
        }
        : { opacity: '.4' };
  
      return {
        display: 'block',
        width: '100%',
        height: '100%',
        position: `${position}`,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        ...o,
        ...b,
        ...other,
      };
    },
    fontText: (
      size: string | number = 1.2,
      lineHeight: number | string = 1.5,
      weight: string | number = 'normal',
      color?: string
    ) => ({
      fontSize: `${size}rem`,
      lineHeight: lineHeight !== 'normal' ? `${lineHeight}rem` : 'normal',
      fontWeight: weight,
      color: color && color,
    }),
  
    whSize: (width: number, height?: number): WHSizeProps => {
      if (!height) {
        return {
          width: `${width}rem`,
          minWidth: `${width}rem`,
        };
      }
      if (width && height) {
        return {
          width: `${width}rem`,
          minWidth: `${width}rem`,
          height: `${height}rem`,
        };
      }
      return {
        width: `${width}rem`,
        minWidth: `${width}rem`,
      };
    },
  };
  