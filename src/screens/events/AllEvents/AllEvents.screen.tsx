// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@gluestack-ui/themed';

// components
import Screen from '../../../components/Screen/Screen';
import { useGetEventsQuery } from '../../../repositories/events.repository';

function AllEventsScreen(): JSX.Element {
  const { t } = useTranslation();
  const { data } = useGetEventsQuery({});

  return (
    <Screen hideBackButton title={t('allEvents.heading')}>
      <Text>{JSON.stringify(data)}</Text>
    </Screen>
  );
}

export default AllEventsScreen;
