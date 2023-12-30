// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';

function AllEventsScreen(): JSX.Element {
  const { t } = useTranslation();
  return <Screen hideBackButton title={t('allEvents.heading')} />;
}

export default AllEventsScreen;
