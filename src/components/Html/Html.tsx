// vendors
import React, { useMemo } from 'react';
import RenderHTML from 'react-native-render-html';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { useToken } from '@gluestack-ui/themed';
import { ARTIC_WEBSITE } from '@env';

// types
import { EventsNavigation } from '../../types/enums/navigation.enums';

interface HtmlProps {
  html?: string;
}

// memoized due to https://stackoverflow.com/questions/68966120/react-native-render-html-you-seem-to-update-the-x-prop-of-the-y-component-in-s
const HtmlMemoized = React.memo(function Html(props: HtmlProps): JSX.Element {
  const { html } = props;
  const navigation = useNavigation();
  const primaryColor: string = useToken('colors', 'primary500');

  function onLinkPress(event: any, href: string): void {
    // events can be shown in the app
    if (href.startsWith('about:///events')) {
      const eventId = href.split('/events').pop()?.split('/')[1];
      if (!eventId) return;
      navigation.dispatch(StackActions.push(EventsNavigation.Detail, { eventId }));
      // other artic.edu links are opened in the browser until the app supports them
    } else if (href.startsWith('about:///')) {
      const routeName = href.split('///')[1];
      Linking.openURL(`${ARTIC_WEBSITE}${routeName}`).catch(console.error);
    } else {
      // all other links are opened by default
      Linking.openURL(href).catch(console.error);
    }
  }

  function getTagsStyles(): Record<string, any> {
    return {
      a: {
        color: primaryColor,
        textDecorationLine: 'none' as 'none',
      },
    };
  }

  const tagsStyles = useMemo(getTagsStyles, [primaryColor]);

  if (!html) return <></>;

  return (
    <RenderHTML
      contentWidth={100}
      source={{ html }}
      tagsStyles={tagsStyles}
      renderersProps={{
        a: { onPress: onLinkPress },
      }}
    />
  );
});

export default HtmlMemoized;
