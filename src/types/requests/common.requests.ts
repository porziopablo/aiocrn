export interface BaseArticParams {
  ids?: string; // comma-separated list of resource ids to retrieve
  limit?: number; // page size (0-based, default: 12)
  page?: number; // page number (1-based, default: 1)
  fields?: string; // comma-separated list of fields to return per resource
}
