// vendors
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, Icon, Text } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

interface BackButtonProps {
  onPress?: () => void;
}

function BackButton(props: BackButtonProps): JSX.Element {
  const { onPress } = props;
  const { goBack, canGoBack } = useNavigation();
  const { t } = useTranslation();

  function handlePress(): void {
    if (onPress) {
      onPress();
    } else {
      canGoBack() && goBack();
    }
  }

  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={handlePress}>
      <Icon color="$primary500" as={ArrowLeftIcon} />
      <Text ml="$2">{t('commons.back')}</Text>
    </TouchableOpacity>
  );
}

export default BackButton;
