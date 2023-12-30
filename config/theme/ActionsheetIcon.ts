import { createStyle } from '@gluestack-style/react';

export const ActionsheetIcon = createStyle({
  props: {
    size: 'sm',
  },
  color: '$backgroundLight500',
  _dark: {
    // @ts-expect-error
    color: '$backgroundDark400',
  },
});
