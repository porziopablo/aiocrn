import type { ArticPageResponse } from '../types/responses/common.responses';

/**
 * Some endpoints that allow pagination params do not return a page
 * when using extra query params, so this function is used to transform
 * the response array into a page response.
 * @param response the response from the api that may or may not be a page response
 * @returns a page response
 */
export function transformArrayResponseIntoPage<T>(
  response: ArticPageResponse<T> | { data: T[] },
): ArticPageResponse<T> {
  const isPageResponse = 'pagination' in response;

  if (isPageResponse) return response;

  return {
    pagination: {
      total: response.data.length,
      limit: response.data.length,
      offset: 0,
      total_pages: 1,
      current_page: 1,
    },
    data: response.data,
  };
}
