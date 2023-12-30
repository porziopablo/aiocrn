// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';

function AllFavoriteEventsScreen(): JSX.Element {
  const { t } = useTranslation();
  return <Screen title={t('allFavoriteEvents.heading')} />;
}

export default AllFavoriteEventsScreen;
