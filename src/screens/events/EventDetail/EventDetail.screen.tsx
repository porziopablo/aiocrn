// vendors
import React from 'react';
import { ScrollView, Text } from '@gluestack-ui/themed';

// types
import { type EventResource } from '../../../types/responses/event.responses';
import Screen from '../../../components/Screen/Screen';

interface EventDetailProps {
  event: EventResource;
}

function EventDetailScreen(props: EventDetailProps): JSX.Element {
  const { event } = props;
  return (
    <Screen title={event.title}>
      <ScrollView>
        <Text>{JSON.stringify(event)}</Text>
      </ScrollView>
    </Screen>
  );
}

export default EventDetailScreen;
