// vendors
import React from 'react';
import GlobalToast, { type ToastConfig, type ToastConfigParams } from 'react-native-toast-message';
import { Toast, ToastDescription, ToastTitle, VStack } from '@gluestack-ui/themed';

export const DEFAULT_TOAST_DURATION = 4000; // ms

interface ToastAction {
  type?: 'success' | 'error' | 'info';
  title?: string;
  description?: string;
}

function BaseToast(props: ToastAction): JSX.Element {
  const { type, title, description } = props;

  return (
    <Toast w="$96" action={type}>
      <VStack space="xs">
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </VStack>
    </Toast>
  );
}

/**
 * Should be rendered in `App.tsx`, as the `LAST CHILD` in the `View` hierarchy,
 * along with any other components that might be rendered there.
 */
function ToastInstance(): JSX.Element {
  const toastConfig: ToastConfig = {
    success: (params: ToastConfigParams<any>) => (
      <BaseToast type="success" title={params.text1} description={params.text2} />
    ),
    error: (params: ToastConfigParams<any>) => (
      <BaseToast type="error" title={params.text1} description={params.text2} />
    ),
    info: (params: ToastConfigParams<any>) => (
      <BaseToast type="info" title={params.text1} description={params.text2} />
    ),
  };

  return <GlobalToast config={toastConfig} autoHide />;
}

export function showToast(args: ToastAction): void {
  GlobalToast.show({
    visibilityTime: DEFAULT_TOAST_DURATION,
    type: args.type,
    text1: args.title,
    text2: args.description,
    autoHide: true,
  });
}

export default ToastInstance;
