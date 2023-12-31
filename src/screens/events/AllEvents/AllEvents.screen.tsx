// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from '@gluestack-ui/themed';

// components
import Screen from '../../../components/Screen/Screen';
import InfiniteScroll from '../../../components/InfiniteScroll/InfiniteScroll';

// repositories
import { useGetEventsQuery } from '../../../repositories/events.repository';

// types
import { type EventResource } from '../../../types/responses/event.responses';

function AllEventsScreen(): JSX.Element {
  const { t } = useTranslation();

  function renderItem(item: EventResource): JSX.Element {
    return (
      <View borderWidth={1} height={100}>
        <Text>
          {item.title}
          {item.short_description}
        </Text>
      </View>
    );
  }

  return (
    <Screen hideBackButton title={t('allEvents.heading')}>
      <InfiniteScroll<EventResource> useQuery={useGetEventsQuery} renderCard={renderItem} />
    </Screen>
  );
}

export default AllEventsScreen;
