// vendors
import React from 'react';
import { type NavigationContainerRef } from '@react-navigation/native';

// types
import { EventsNavigation, TabNavigation } from '../types/enums/navigation.enums';

export const navigationRef =
  React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

/**
 * Redirects user to "not found" page
 */
export function redirectToNotFound(): void {
  navigationRef.current?.navigate(TabNavigation.Events, { screen: EventsNavigation.NotFound });
}
