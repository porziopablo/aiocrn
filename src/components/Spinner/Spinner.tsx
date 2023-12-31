import React from 'react';
import { Spinner as GluestackSpinner } from '@gluestack-ui/themed';

interface SpinnerProps {
  size?: number | 'small' | 'large' | undefined;
}

function Spinner(props: SpinnerProps): JSX.Element {
  return <GluestackSpinner {...props} color="$primary500" />;
}

export default Spinner;
