import { palette } from '../palette';

export const MuiButton = {
  styleOverrides: {
    root: {
      color: '#fff',
      background: 'black',
    },
    text: {
      // padding: 0,
      'background': 'transparent',
      'boxShadow': 'none',
      'color': 'black',
      '&:hover': {
        background: 'transparent',
        boxShadow: 'none',
        color: 'black',
      },
    },
    contained: {
      'maxWidth': '220px',
      'height': '50px',
      'background': palette.primary.fire,
      'boxShadow': 'inset 0px -2px 0px rgba(0, 0, 0, 0.25)',

      '&:hover': {
        background: palette.primary.fire,
      },
    },
    nft_common: {
      ///// figma-styled button
      'alignItems': 'center',
      'maxWidth': '220px',
      'height': '50px',
      'background': palette.primary.fire,
      'boxShadow': 'inset rgba(0, 0, 0, 0.25) 0px -1px 0px',
      'borderRadius': '0px',
      'textTransform': 'initial',
      '&:hover': {
        background: palette.primary.fire,
      },
    },
  },
};
