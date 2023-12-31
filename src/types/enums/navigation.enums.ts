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
}

export enum FavoritesNavigation {
  All = 'AllFavorites',
}

export enum MoreNavigation {
  More = 'More',
  Settings = 'Settings',
  About = 'About',
}

export interface EventsStackParamList {
  [EventsNavigation.All]: undefined;
  [EventsNavigation.Detail]: { eventId: string };
}

export interface FavoriteEventsStackParamList {
  [FavoritesNavigation.All]: undefined;
}

export interface MoreStackParamList {
  [MoreNavigation.More]: undefined;
  [MoreNavigation.Settings]: undefined;
  [MoreNavigation.About]: undefined;
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
