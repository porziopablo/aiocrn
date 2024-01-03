// vendors
import React from 'react';
import { ScrollView, Text, Box } from '@gluestack-ui/themed';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';
import Html from '../../../components/Html/Html';
import FavoriteEventButton from '../../../features/events/FavoriteEventButton/FavoriteEventButton';
import AddToCalendarButton from '../../../features/events/AddToCalendarButton/AddToCalendarButton';
import Image from '../../../components/Image/Image';

// types
import { type EventResource } from '../../../types/responses/event.responses';

interface EventDetailProps {
  event: EventResource;
}

function EventDetailScreen(props: EventDetailProps): JSX.Element {
  const { event } = props;
  const { i18n } = useTranslation();

  return (
    <Screen title={event.title}>
      <ScrollView pt="$4" style={{ width: '100%' }} contentContainerStyle={{ paddingBottom: 20 }}>
        <Box flexDirection="row" justifyContent="space-between" alignItems="center" my="$1.5">
          <Text $dark-color="$textLight200" fontSize="$md">
            {DateTime.fromISO(event.start_date).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY, {
              locale: i18n.language,
            })}
          </Text>
          <FavoriteEventButton eventId={event.id.toString()} />
        </Box>
        <Image
          h={300}
          w="$full"
          borderRadius={'$lg' as any}
          source={event.image_url}
          alt={event.hero_caption ?? event.title}
        />
        <Html html={event.hero_caption} />
        <Html html={event.description} />
        <AddToCalendarButton event={event} />
      </ScrollView>
    </Screen>
  );
}

export default EventDetailScreen;
