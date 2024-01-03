// vendors
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';

// store
import { useAppSelector } from '../../hooks/store.hooks';

interface AppStartUpProps {
  children?: React.ReactNode;
}

function AppStartUp(props: AppStartUpProps): JSX.Element {
  const { children } = props;
  const { i18n } = useTranslation();
  const language = useAppSelector((state) => state.userSettings.language);
  const [isReady, setIsReady] = useState(false);

  async function startUp(): Promise<void> {
    setIsReady(false);
    await i18n.changeLanguage(language);
    SplashScreen.hide();
    setIsReady(true);
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    startUp();
  }, []);

  if (!isReady) return <></>;

  return isReady ? <>{children}</> : <></>;
}

export default AppStartUp;
