// vendors
import React, { useEffect, useMemo, useState } from 'react';
import { Text } from '@gluestack-ui/themed';
import { type TypedUseQueryHookResult } from 'node_modules/@reduxjs/toolkit/dist/query/react/buildHooks';

// components
import BidirectionalList, { type BidirectionalFlatListProps } from './BidirectionalFlatList';

// types
import { type BaseArticParams } from '../../types/requests/common.requests';
import { type ArticPageResponse } from '../../types/responses/common.responses';

const DEFAULT_PAGE_SIZE = 10;

export interface InfiniteScrollItemOpts {
  isFetching?: boolean;
}

export interface InfiniteScrollProps<T> {
  renderEmpty?: () => React.ReactElement;
  renderCard: (item: T, opts?: InfiniteScrollItemOpts) => React.ReactElement;
  useQuery: (
    arg: BaseArticParams,
    options?: any,
  ) => TypedUseQueryHookResult<ArticPageResponse<T>, BaseArticParams, any>;
  onShowMore?: () => void;
  onTotalElementsChange?: (totalElements: number) => void;
  showMoreVisible?: boolean;
  inverted?: boolean;
  pageSize?: number;
  bottomThreshold?: number;
  additionalQueryParams?: Record<string, any>;
  itemStyle?: BidirectionalFlatListProps<T>['itemStyle'];
}

function InfiniteScroll<T>(props: InfiniteScrollProps<T>): JSX.Element {
  const {
    renderEmpty,
    renderCard,
    useQuery,
    pageSize = DEFAULT_PAGE_SIZE,
    bottomThreshold,
    additionalQueryParams,
    onTotalElementsChange,
  } = props;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState([1, 2]);

  // this resets the list when the params change
  useEffect(() => {
    setPage(1);
    setTotalPages([1, 2]);
  }, [additionalQueryParams]);

  const previousResult = useQuery(
    { ...(additionalQueryParams ?? {}), page: page - 1, limit: pageSize },
    { skip: page === 0 },
  );
  const currentResult = useQuery({ ...(additionalQueryParams ?? {}), page, limit: pageSize });
  const nextResult = useQuery({
    ...(additionalQueryParams ?? {}),
    page: page + 1,
    limit: pageSize,
  });

  useEffect(() => {
    // TODO: add onTotalElementsChange to dependencies, but avoiding infinite loop
    onTotalElementsChange?.(currentResult.data?.pagination?.total ?? 0);
  }, [currentResult]);

  const isFetching = currentResult.isFetching || nextResult.isFetching || previousResult.isFetching;
  const firstLoad = currentResult.isLoading || nextResult.isLoading || previousResult.isLoading;

  const items = useMemo(() => {
    const array: T[] = [];
    // when scrolling up, the previous data may exist, even if the current page is 1
    if (previousResult?.data?.data && page !== 1) array.push(...previousResult.data.data);
    if (currentResult?.data?.data) array.push(...currentResult.data.data);
    // the next data may exist in the cache, even if the current page is the last one
    if (nextResult?.data?.data) array.push(...nextResult.data.data);
    return array;
  }, [previousResult?.data?.data, currentResult?.data?.data, nextResult?.data?.data, page]);

  async function changePage(goBack?: boolean): Promise<void> {
    if (isFetching) return;

    const direction = goBack ? -1 : 1;
    const nextPage = page + direction;

    /* If the next page is the last one, we don't want to fetch it, since
     we already done that when the current page was the one before the last one,
     and the nextResult is already the last page. This avoids an extra render that
     can be seen when the user scrolls to the bottom of the list.
     
     It's an inequality because it can get bigger than the last page on some cases.
     */
    const isNextPageLastPage = nextPage >= (currentResult?.data?.pagination?.total_pages ?? 0);

    if (nextPage < 1 || isNextPageLastPage) return;

    setPage(nextPage);

    if (!totalPages.includes(nextPage + 1)) {
      const newPages = [...totalPages];
      newPages.push(nextPage + 1);
      setTotalPages(newPages);
    }
  }

  if (firstLoad) return <Text>...loading</Text>;

  return (
    <BidirectionalList<T>
      data={items}
      pageCount={currentResult?.data?.pagination?.total_pages ?? 0}
      renderItem={(item) => renderCard(item, { isFetching })}
      renderListEmptyComponent={renderEmpty}
      renderListFooterComponent={() => (isFetching ? <Text>...loading</Text> : <></>)}
      renderListHeaderComponent={() => (isFetching ? <Text>...loading</Text> : <></>)}
      onEndReached={changePage}
      onStartReached={async () => {
        await changePage(true);
      }}
      isLoading={isFetching}
      page={page}
      totalPages={totalPages}
      pageSize={pageSize}
      bottomThreshold={bottomThreshold}
    />
  );
}

export default InfiniteScroll;
