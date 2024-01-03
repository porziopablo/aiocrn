// vendors
import React from 'react';

// components
import { Box, Heading, Text } from '@gluestack-ui/themed';

interface EmptyListProps {
  title: string;
  info?: string;
}

function EmptyList(props: EmptyListProps): JSX.Element {
  const { title, info } = props;

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Heading>{title}</Heading>
      {!!info && <Text textAlign="center">{info}</Text>}
    </Box>
  );
}

export default EmptyList;
