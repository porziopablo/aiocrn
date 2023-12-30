// vendors
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Heading, View } from '@gluestack-ui/themed';

// components
import BackButton from '../BackButton/BackButton';

interface ScreenProps {
  children?: React.ReactNode;
  title?: string;
  hideBackButton?: boolean;
}

function Screen(props: ScreenProps): JSX.Element {
  const { children, title, hideBackButton } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingHorizontal: 16,
        },
      ]}
    >
      <View style={styles.headerRow}>
        {!hideBackButton && <BackButton />}
        {!!title && (
          <Heading fontSize="$2xl" marginLeft="$5">
            {title}
          </Heading>
        )}
      </View>
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default Screen;
