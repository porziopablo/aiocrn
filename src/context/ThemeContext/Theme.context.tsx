// vendors
import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

interface ThemeContextProps {
  children: React.ReactNode;
}

function ThemeContext(props: ThemeContextProps): JSX.Element {
  const { children } = props;

  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}

export default ThemeContext;
