import { makeStyles } from '@material-ui/core';
import { mixin } from '@newsletter/utils/mixin';

export const useStyles = makeStyles((theme) => ({
  wrapper_loading: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    bottom: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    ...mixin.flex('center', 'center'),
  },
  blur: {
    '& ~ div, & ~ form, & ~ section,& ~ ul,& ~ p, & ~ h2, & ~ h3, & ~ h4, & ~ h1, & ~ span,  & ~ table': {
      transition: '.8s',
      filter: 'blur(1px)',
      transform: 'scale(0.99)',
      pointerEvents: 'none'
    }
  },
  primary: {
    color: theme.palette.primary.main
  },
  light: {
    color: theme.palette.primary.main
  }
}));
