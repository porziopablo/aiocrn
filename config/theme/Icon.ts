import { createStyle } from '@gluestack-style/react';

export const BaseIcon = createStyle({
  color: '$backgroundLight800',
  _dark: {
    color: '$backgroundDark400',
  },
  variants: {
    size: {
      '2xs': {
        h: '$3',
        w: '$3',
        props: {
          // @ts-expect-error
          size: 12,
        },
      },
      xs: {
        h: '$3.5',
        w: '$3.5',
        props: {
          // @ts-expect-error
          size: 14,
        },
      },
      sm: {
        h: '$4',
        w: '$4',
        props: {
          // @ts-expect-error
          size: 16,
        },
      },
      md: {
        h: '$4.5',
        w: '$4.5',
        props: {
          // @ts-expect-error
          size: 18,
        },
      },
      lg: {
        h: '$5',
        w: '$5',
        props: {
          // @ts-expect-error
          size: 20,
        },
      },
      xl: {
        h: '$6',
        w: '$6',
        props: {
          // @ts-expect-error
          size: 24,
        },
      },
    },
  },
  // defaultProps: {
  //   size: 'md',
  // },
});

export const Icon = createStyle({
  props: {
    size: 'md',
    // @ts-expect-error
    fill: 'none',
  },
  color: '$backgroundLight800',
  _dark: {
    // @ts-expect-error
    color: '$backgroundDark400',
  },
});
