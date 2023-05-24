import { makeStyles } from '@material-ui/core';
import { mixin } from '@newsletter/utils/mixin';

// '@media(max-width: 768px)': {}
export const useStyles = makeStyles((theme) => ({
  user_badge_panel: {
    width: 240,
    position: 'relative',
    marginLeft: 'auto',
    '&:hover': {
      '& $user_name': {
        color: theme.palette.primary.dark
      },
      '& $dropdown': {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        transform: 'translateY(0px)',
      }
    }
  },
  user_name: {
    color: '#000',
    fontSize: 15,
    '@media(max-width: 992px)': {
      color: '#000',
      marginLeft: 0,
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces'
    }
  },
  user_email: {
    color: '#808285',
    fontWeight: 100
  },
  user_info_wrapper: {
    marginLeft: 15,
  },
  user_badge: {
    cursor: 'pointer',
    padding: 7,
    borderRadius: 5,
    position: 'relative',
    zIndex: 3,
    ...mixin.flex('center', 'flex-end'),
  },
  text_item: {
    color: '#000',
    margin: '0 0 0 8px',
    textTransform: 'capitalize',
    lineHeight: 1.4
  },
  dropdown: {
    transition: '.4s transform, .4s opacity',
    transform: 'translateY(30px)',
    pointerEvents: 'none',
    visibility: 'hidden',
    position: 'absolute',
    borderRadius: 3,
    paddingTop: 60,
    width: '100%',
    opacity: 0,
    zIndex: 1,
    left: 0,
    top: 0
  },
  dropdown_body: {
    borderRadius: 3,
    background: '#fff',
    position: 'relative',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    display: 'flex',
    width: '100%'
  },
  user_subscription_wrapper: {
    padding: '10px 15px',
    position: 'relative',
    marginBottom: 2,
    ' &:after': {
      // content: '""',
      display: 'block',
      height: 3,
      width: '88%',
      left: 0,
      right: 0,
      position: 'absolute',
      margin: 'auto',
      background: theme.palette.info.light
    },
    '&:before': {
      top: 0
    },
    '&:after': {
      bottom: 0
    },
    '& h6': {
      color: '#000',
      display: 'inline',
      paddingRight: 5,
      fontWeight: 'bold',
      fontSize: 14
    },
    '& span': {
      fontWeight: 'bold',
      fontSize: 14
    }
  }
}));
