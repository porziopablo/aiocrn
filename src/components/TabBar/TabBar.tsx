// vendors
import React from 'react';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { View, CalendarDaysIcon, Icon, MenuIcon, StarIcon, Text } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import get from 'lodash/get';

// types
import { TabNavigation } from '../../types/enums/navigation.enums';

const routeToIconMap = {
  [TabNavigation.Events]: CalendarDaysIcon,
  [TabNavigation.Favorites]: StarIcon,
  [TabNavigation.More]: MenuIcon,
};

function getIcon(routeName: string): JSX.Element {
  return get(routeToIconMap, routeName) || '';
}

function TabBar(props: BottomTabBarProps): JSX.Element {
  const { state, navigation } = props;
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]} bgColor="$primary500">
      {state.routes.map((route, index) => {
        const label = t(`tabs.${route.name}`);
        const isFocused = state.index === index;

        const onPress = (): void => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // `merge: true` makes sure params inside tab screen are preserved
            navigation.navigate(route.name, { merge: true });
          }
        };

        const color = isFocused ? '$white' : '$primary100';

        return (
          <TouchableOpacity style={styles.tab} onPress={onPress} key={route.key}>
            <Icon as={getIcon(route.name)} color={color} />
            <Text bold color={color}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TabBar;
