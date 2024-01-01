// vendors
import React, { type ComponentProps } from 'react';
import { Image as GluestackImage } from '@gluestack-ui/themed';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultImage = require('../../assets/image-not-found.png');

type ImageProps = Omit<ComponentProps<typeof GluestackImage>, 'source'> & {
  source?: string;
};

function Image(props: ImageProps): JSX.Element {
  const { source } = props;

  const imageSource = source ? { uri: source } : defaultImage;

  return <GluestackImage {...props} source={imageSource} />;
}

export default Image;
