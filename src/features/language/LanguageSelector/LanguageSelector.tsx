// vendors
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// store
import { useAppSelector, useAppDispatch } from '../../../hooks/store.hooks';
import { setLanguage } from '../../../store/userSettings';

// components
import SelectInput, { type SelectInputItem } from '../../../components/SelectInput/SelectInput';

function LanguageSelector(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.userSettings.language);

  function onChange(newLang: string): void {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(setLanguage({ language: newLang }));
  }

  function getItems(): SelectInputItem[] {
    return [
      { value: 'en', label: t('languages.en') },
      { value: 'es', label: t('languages.es') },
    ];
  }

  const items = useMemo(getItems, [t, currentLanguage]);

  return (
    <SelectInput
      items={items}
      placeholder={t('commons.language')}
      selectedValue={currentLanguage}
      onChange={onChange}
    />
  );
}

export default LanguageSelector;
