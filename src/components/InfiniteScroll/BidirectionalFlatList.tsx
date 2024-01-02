/* eslint-disable @typescript-eslint/no-floating-promises */
// vendors
import React from 'react';
import {
  type LayoutChangeEvent,
  type LayoutRectangle,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ViewStyle,
  ScrollView,
  View,
} from 'react-native';
import get from 'lodash/get';

const DEFAULT_PADDING = 25;
const SCROLL_THROTTLE = 0;
const DEFAULT_BOTTOM_THRESHOLD = 2000;
const DEFAULT_TOP_THRESHOLD = 4000;
const PADDING_HEIGHT_REDUCER = 3;

export interface BidirectionalFlatListProps<T> {
  data: T[];
  isLoading: boolean;
  page: number;
  totalPages: number[];
  pageCount: number;
  pageSize: number;
  itemStyle?: { marginTop?: number; marginBottom?: number; marginVertical?: number };
  bottomThreshold?: number;
  topThreshold?: number;
  onEndReached: () => void | Promise<void>;
  onStartReached: () => void | Promise<void>;
  renderItem: (item: T) => JSX.Element;
  renderEmpty?: () => JSX.Element;
  renderHeader?: () => JSX.Element;
  renderFooter?: () => JSX.Element;
}
/**
 * It's based on the concept of list virtualization.
 */
function BidirectionalFlatList<T>(props: BidirectionalFlatListProps<T>): JSX.Element {
  const {
    data = [],
    isLoading,
    pageCount,
    renderItem,
    renderEmpty,
    renderFooter,
    renderHeader,
  } = props;

  const [layoutFirstElement, setLayoutFirstElement] = React.useState<LayoutRectangle>();
  const [layoutLastElement, setLayoutLastElement] = React.useState<LayoutRectangle>();
  const [listStyle, setListStyle] = React.useState<ViewStyle>();

  let lastScroll = 0;

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>): void {
    const {
      page,
      totalPages,
      pageSize,
      itemStyle,
      bottomThreshold = DEFAULT_BOTTOM_THRESHOLD,
      topThreshold = DEFAULT_TOP_THRESHOLD,
      onEndReached,
      onStartReached,
    } = props;

    const before = totalPages.slice(0, page);
    const after = totalPages.slice(page + 1, totalPages.length - 1);

    const marginTop = get(itemStyle, 'marginTop', 0);
    const marginBottom = get(itemStyle, 'marginBottom', 0);
    const marginVertical = get(itemStyle, 'marginVertical', 0);
    const margin = marginVertical || marginTop + marginBottom;

    const scrollPosition = get(event, 'nativeEvent.contentOffset.y', 0);
    const parentHeight = get(event, 'nativeEvent.layoutMeasurement.height', 0);

    const lastElementOuterHeight = get(layoutLastElement, 'height', 0);
    const lastElementOffsetHeight = lastElementOuterHeight - margin;
    const lastElementOffsetTop = get(layoutLastElement, 'y', 0); // distance from top of the screen
    const lastElementPastThreshold = // the threshold allows to detect earlier that the user is past the last element
      lastElementOffsetTop - parentHeight - lastElementOffsetHeight - bottomThreshold;

    const firstElementOuterHeight = get(layoutFirstElement, 'height', 0);
    const firstElementOffsetTop = get(layoutFirstElement, 'y', 0); // distance from top of the screen

    const isNextPageLastPage = page + 1 >= pageCount;

    // when scrolling down
    if (scrollPosition >= lastScroll && scrollPosition >= lastElementPastThreshold) {
      onEndReached();

      if (page > 0 && !isNextPageLastPage) {
        setListStyle({
          // add padding to simulate list size
          paddingTop: before.length * pageSize * lastElementOuterHeight,
          paddingBottom:
            after.length >= PADDING_HEIGHT_REDUCER
              ? (after.length - PADDING_HEIGHT_REDUCER) * pageSize * lastElementOuterHeight +
                DEFAULT_PADDING
              : DEFAULT_PADDING,
        });
      }

      // when scrolling up
      // the threshold allows to detect earlier that the user is past the first element
    } else if (scrollPosition <= firstElementOffsetTop + topThreshold) {
      onStartReached();

      if (page > 0) {
        setListStyle({
          // add padding to simulate list size
          paddingTop:
            before.length >= PADDING_HEIGHT_REDUCER
              ? (before.length - PADDING_HEIGHT_REDUCER) * pageSize * firstElementOuterHeight
              : 0,
          paddingBottom: after.length * pageSize * lastElementOuterHeight + DEFAULT_PADDING,
        });
      }
    }

    lastScroll = scrollPosition;
  }

  function onLayoutFirstItem(event: LayoutChangeEvent): void {
    setLayoutFirstElement(event.nativeEvent.layout);
  }

  function onLayoutLastItem(event: LayoutChangeEvent): void {
    setLayoutLastElement(event.nativeEvent.layout);
  }

  function wrapItem(item: T, index: number): JSX.Element {
    switch (index) {
      case 0:
        return (
          <View onLayout={onLayoutFirstItem} key={get(item, 'id', index) as any}>
            {renderItem(item)}
          </View>
        );
      case data.length - 1:
        return (
          <View onLayout={onLayoutLastItem} key={get(item, 'id', index) as any}>
            {renderItem(item)}
          </View>
        );
      default:
        return <View key={get(item, 'id', index) as any}>{renderItem(item)}</View>;
    }
  }

  return (
    <ScrollView
      decelerationRate="fast"
      onScrollEndDrag={onScroll}
      scrollEventThrottle={SCROLL_THROTTLE}
      style={{ paddingTop: 0 }}
    >
      {renderHeader?.()}
      <View
        style={{
          paddingBottom: DEFAULT_PADDING, // extra space in case page fits exactly in screen
          flexDirection: 'column',
          overflow: isLoading ? 'hidden' : 'scroll',
        }}
      >
        <View style={listStyle}>{data.map(wrapItem)}</View>
        {!data.length && !isLoading ? renderEmpty?.() : null}
      </View>
      {renderFooter?.()}
    </ScrollView>
  );
}

export default BidirectionalFlatList;
