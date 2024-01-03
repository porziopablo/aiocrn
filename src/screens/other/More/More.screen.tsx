// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';
import LanguageSelector from '../../../features/language/LanguageSelector/LanguageSelector';
import { Box } from '@gluestack-ui/themed';

function MoreScreen(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Screen hideBackButton title={t('more.heading')}>
      <Box w="$full" h="$full" mt="$10">
        <LanguageSelector />
      </Box>
    </Screen>
  );
}

export default MoreScreen;
