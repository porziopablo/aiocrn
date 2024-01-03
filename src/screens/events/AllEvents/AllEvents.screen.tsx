// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';
import InfiniteScroll from '../../../components/InfiniteScroll/InfiniteScroll';
import EventCard from '../../../features/events/EventCard/EventCard';
import EmptyList from '../../../components/EmptyList/EmptyList';

// repositories
import { useGetEventsQuery } from '../../../repositories/events.repository';

// types
import { type EventResource } from '../../../types/responses/event.responses';

function AllEventsScreen(): JSX.Element {
  const { t } = useTranslation();

  function renderItem(item: EventResource): JSX.Element {
    return <EventCard event={item} />;
  }

  function renderEmptyList(): JSX.Element {
    return <EmptyList title={t('allFavoriteEvents.empty')} />;
  }

  return (
    <Screen hideBackButton title={t('allEvents.heading')}>
      <InfiniteScroll<EventResource>
        useQuery={useGetEventsQuery}
        renderItem={renderItem}
        renderEmpty={renderEmptyList}
      />
    </Screen>
  );
}

export default AllEventsScreen;
