// vendors
import React from 'react';
import { View } from '@gluestack-ui/themed';
import get from 'lodash/get';

// components
import Spinner from '../../../components/Spinner/Spinner';
import EventDetailScreen from './EventDetail.screen';

// repositories
import { useGetEventQuery } from '../../../repositories/events.repository';

function EventDetailScreenContainer({ route }: any): JSX.Element {
  const eventId: string = get(route, 'params.eventId', '');
  const { data, isLoading } = useGetEventQuery(eventId, { skip: !eventId });

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Spinner size="large" />
      </View>
    );

  if (!data) return <View />;

  return <EventDetailScreen event={data} />;
}

export default EventDetailScreenContainer;
