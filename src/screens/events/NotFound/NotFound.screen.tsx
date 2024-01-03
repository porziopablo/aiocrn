// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

// components
import Screen from '../../../components/Screen/Screen';
import EmptyList from '../../../components/EmptyList/EmptyList';

// types
import { EventsNavigation, TabNavigation } from '../../../types/enums/navigation.enums';

function NotFoundScreen(): JSX.Element {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  function onPressBackButton(): void {
    navigate(TabNavigation.Events, { screen: EventsNavigation.All });
  }

  return (
    <Screen onPressBackButton={onPressBackButton}>
      <EmptyList title={t('notFound.heading')} info={t('notFound.info')} />
    </Screen>
  );
}

export default NotFoundScreen;
