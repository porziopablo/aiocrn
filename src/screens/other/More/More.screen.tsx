// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';

// components
import Screen from '../../../components/Screen/Screen';

function MoreScreen(): JSX.Element {
  const { t } = useTranslation();
  return <Screen title={t('more.heading')} />;
}

export default MoreScreen;
