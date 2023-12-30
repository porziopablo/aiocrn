// vendors
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Heading, View } from '@gluestack-ui/themed';

interface ScreenProps {
  children?: React.ReactNode;
  title?: string;
}

function Screen(props: ScreenProps): JSX.Element {
  const { children, title } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {!!title && <Heading>{title}</Heading>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Screen;
