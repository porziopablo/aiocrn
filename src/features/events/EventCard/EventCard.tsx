// vendors
import React from 'react';
import { Box, VStack, Heading, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { DateTime } from 'luxon';
import { TouchableOpacity } from 'react-native';
import RenderHTML from 'react-native-render-html';

// types
import { type EventResource } from '../../../types/responses/event.responses';
import { EventsNavigation, TabNavigation } from '../../../types/enums/navigation.enums';

interface EventCardProps {
  event: EventResource;
}

function EventCard(props: EventCardProps): JSX.Element {
  const { event } = props;
  const { navigate } = useNavigation();

  function onPress(): void {
    navigate(TabNavigation.Events, {
      screen: EventsNavigation.Detail,
      params: { eventId: `${event.id}` },
    });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        height={400}
        borderColor="$borderLight200"
        borderRadius="$lg"
        borderWidth="$1"
        my="$4"
        overflow="hidden"
        $base-mx="$5"
        $dark-bg="$backgroundDark900"
        $dark-borderColor="$borderDark800"
      >
        <Box>
          <Image
            h={150}
            w="$full"
            source={{ uri: event.image_url }}
            alt={event.hero_caption ?? event.title}
          />
        </Box>
        <VStack px="$6" pt="$4" pb="$6">
          <Text $dark-color="$textLight200" fontSize="$sm" my="$1.5">
            {DateTime.fromISO(event.start_date).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
          </Text>
          <Heading $dark-color="$textLight200" size="sm">
            {event.title}
          </Heading>
          {!!event.short_description && (
            <RenderHTML contentWidth={100} source={{ html: event.short_description }} />
          )}
        </VStack>
      </Box>
    </TouchableOpacity>
  );
}

export default EventCard;
