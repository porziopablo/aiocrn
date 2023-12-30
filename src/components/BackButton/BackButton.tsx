// vendors
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, Icon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

interface BackButtonProps {
  onPress?: () => void;
}

function BackButton(props: BackButtonProps): JSX.Element {
  const { onPress } = props;
  const { goBack, canGoBack } = useNavigation();

  function handlePress(): void {
    if (onPress) {
      onPress();
    } else {
      canGoBack() && goBack();
    }
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon color="$primary500" as={ArrowLeftIcon} />
    </TouchableOpacity>
  );
}

export default BackButton;
