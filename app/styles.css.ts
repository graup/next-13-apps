import { style, globalStyle } from '@vanilla-extract/css';

export const someStyle = style({
  backgroundColor: '#000',
});

globalStyle('body', {
  backgroundColor: '#222',
});