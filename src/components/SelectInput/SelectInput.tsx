// vendors
import React, { type ComponentProps, useMemo } from 'react';
import {
  Select,
  SelectIcon,
  SelectTrigger,
  Icon,
  SelectInput as GlueStackInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectItem,
  SelectDragIndicator,
  ChevronDownIcon,
  Text,
} from '@gluestack-ui/themed';

export interface SelectInputItem extends ComponentProps<typeof SelectItem> {}

interface SelectInputProps {
  items: SelectInputItem[];
  placeholder?: string;
  selectedValue?: string;
  onChange: (value: string) => void;
}

function SelectInput(props: SelectInputProps): JSX.Element {
  const { items = [], placeholder, selectedValue, onChange } = props;

  function renderItem(item: SelectInputItem): JSX.Element {
    return <SelectItem key={item.value} {...item} />;
  }

  function getSelectedLabel(): string {
    return items.find((item) => item.value === selectedValue)?.label ?? '';
  }

  const selectedLabel = useMemo(getSelectedLabel, [selectedValue, items]);

  return (
    <Select selectedLabel={selectedLabel} selectedValue={selectedValue} onValueChange={onChange}>
      <Text>{placeholder}</Text>
      <SelectTrigger w="$full" variant="outline">
        <GlueStackInput placeholder={placeholder} />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {items.map(renderItem)}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

export default SelectInput;
