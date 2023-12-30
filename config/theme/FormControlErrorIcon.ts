import { createStyle } from '@gluestack-style/react';

export const FormControlErrorIcon = createStyle({
  color: '$error700',
  _dark: {
    // @ts-expect-error
    color: '$error400',
  },
  props: {
    size: 'sm',
  },
});
