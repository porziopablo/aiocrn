// vendors
import React, { useState } from 'react';
import { Button, ButtonText } from '@gluestack-ui/themed';
import { useTranslation } from 'react-i18next';

// types
import { type EventResource } from '../../../types/responses/event.responses';

// native modules
import { addCalendarEvent } from '../../../nativeModules/nativeModules';

interface AddToCalendarButtonProps {
  event: EventResource;
}

function AddToCalendarButton(props: AddToCalendarButtonProps): JSX.Element {
  const { event } = props;
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  async function onPress(): Promise<void> {
    try {
      setDisabled(true);
      await addCalendarEvent({
        title: event.title,
        startDate: new Date(event.start_date).getTime(),
        endDate: new Date(event.end_date).getTime(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <Button disabled={disabled} onPress={onPress as any}>
      <ButtonText>{t('events.addToCalendar')}</ButtonText>
    </Button>
  );
}

export default AddToCalendarButton;
