// vendors
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';
import EventCard from '../../../features/events/EventCard/EventCard';
import InfiniteScroll from '../../../components/InfiniteScroll/InfiniteScroll';
import EmptyList from '../../../components/EmptyList/EmptyList';

// store & repositories
import { useAppSelector } from '../../../hooks/store.hooks';
import { useGetEventsQuery } from '../../../repositories/events.repository';

// types
import { type EventResource } from '../../../types/responses/event.responses';

function AllFavoriteEventsScreen(): JSX.Element {
  const { t } = useTranslation();
  const { favoriteEventsIds } = useAppSelector((state) => state.favorites);

  function renderItem(item: EventResource): JSX.Element {
    return <EventCard event={item} />;
  }

  function getAdditionalQueryParams(): Record<string, string> {
    return { ids: favoriteEventsIds.join(',') };
  }

  function renderEmptyList(): JSX.Element {
    return <EmptyList title={t('allFavoriteEvents.empty')} />;
  }

  const additionalQueryParams = useMemo(getAdditionalQueryParams, [favoriteEventsIds]);

  return (
    <Screen hideBackButton title={t('allFavoriteEvents.heading')}>
      {!favoriteEventsIds.length ? (
        renderEmptyList()
      ) : (
        <InfiniteScroll<EventResource>
          additionalQueryParams={additionalQueryParams}
          useQuery={useGetEventsQuery}
          renderItem={renderItem}
          renderEmpty={renderEmptyList}
        />
      )}
    </Screen>
  );
}

export default AllFavoriteEventsScreen;
