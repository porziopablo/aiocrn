export interface ArticPageResponse<T> {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url?: string;
  };
  data: T[];
}
