/* eslint-disable @typescript-eslint/no-namespace */
import { type NavigatorScreenParams } from '@react-navigation/native';

export enum TabNavigation {
  Events = 'Events',
  Favorites = 'Favorites',
  More = 'More',
}

export enum EventsNavigation {
  All = 'AllEvents',
  Detail = 'EventDetail',
  NotFound = 'NotFound',
}

export enum FavoritesNavigation {
  All = 'AllFavorites',
}

export enum MoreNavigation {
  More = 'MoreScreen',
}

export interface EventsStackParamList {
  [EventsNavigation.All]: undefined;
  [EventsNavigation.Detail]: { eventId: string };
  [EventsNavigation.NotFound]: undefined;
}

export interface FavoriteEventsStackParamList {
  [FavoritesNavigation.All]: undefined;
}

export interface MoreStackParamList {
  [MoreNavigation.More]: undefined;
}

export interface TabsParamList {
  [TabNavigation.Events]: NavigatorScreenParams<EventsStackParamList>;
  [TabNavigation.Favorites]: NavigatorScreenParams<FavoriteEventsStackParamList>;
  [TabNavigation.More]: NavigatorScreenParams<MoreStackParamList>;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabsParamList {}
  }
}
