// vendors
import React, { useMemo } from 'react';
import { Icon, StarIcon } from '@gluestack-ui/themed';

// components
import { TouchableOpacity } from 'react-native';

// store
import { useAppSelector, useAppDispatch } from '../../../hooks/store.hooks';
import { addFavorite, removeFavorite } from '../../../store/favorites';

interface FavoriteEventButtonProps {
  eventId: string;
}

function FavoriteEventButton(props: FavoriteEventButtonProps): JSX.Element {
  const { eventId } = props;
  const { favoriteEventsIds } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  function isFavorite(): boolean {
    return favoriteEventsIds.includes(eventId);
  }

  const isFavoriteEvent = useMemo(isFavorite, [favoriteEventsIds, eventId]);

  function onPressFavorite(): void {
    if (isFavoriteEvent) {
      dispatch(removeFavorite(eventId));
    } else {
      dispatch(addFavorite(eventId));
    }
  }

  return (
    <TouchableOpacity onPress={onPressFavorite}>
      <Icon
        as={StarIcon}
        size="xl"
        fill={isFavoriteEvent ? '$primary500' : 'transparent'}
        color="$primary500"
      />
    </TouchableOpacity>
  );
}

export default FavoriteEventButton;
