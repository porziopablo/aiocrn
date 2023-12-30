export interface EventResource {
  // Unique identifier of this resource. Taken from the source system.
  id: number;

  // REST API resource type or endpoint
  api_model: string;

  // REST API link for this resource
  api_link: string;

  // The name of this resource
  title: string;

  // The name of this event formatted with HTML (optional)
  title_display?: string;

  // The URL of an image representing this page
  image_url: string;

  // Text displayed with the hero image on the event
  hero_caption: string;

  // Brief description of the event
  short_description: string;

  // Brief description of the event displayed below the title
  header_description: string;

  // One-sentence description of the event displayed in listings
  list_description: string;

  // All copytext of the event
  description: string;

  // Where the event takes place
  location: string;

  // Unique identifier indicating the preferred type of this event
  event_type_id: number;

  // Unique identifiers indicating the alternate types of this event
  alt_event_type_ids: number[];

  // Unique identifier indicating the preferred audience for this event
  audience_id: number;

  // Unique identifiers indicating the alternate audiences for this event
  alt_audience_ids: number[];

  // Unique identifiers indicating the programs this event is a part of
  program_ids: number[];

  // Titles of the programs this event is a part of
  program_titles: string[];

  // Whether a ticket is required to attend the event
  is_ticketed: boolean;

  // The URL to the sales site for this event
  rsvp_link?: string; // Assuming 'url' is a custom type for URLs

  // The text used on the ticket/registration button
  buy_button_text: string;

  // Additional text below the ticket/registration button
  buy_button_caption?: string;

  // Whether registration is required to attend the event
  is_registration_required: boolean;

  // Whether the event is exclusive to members of the museum
  is_member_exclusive: boolean;

  // Whether the event is sold out
  is_sold_out: boolean;

  // Whether the event is free
  is_free: boolean;

  // Whether admission to the museum is required to attend this event
  is_admission_required: boolean;

  // Whether the event is to be held after the museum closes
  is_after_hours: boolean;

  // Whether the event is being held virtually
  is_virtual_event: boolean;

  // The date the event begins
  start_date: string; // ISO 8601 date and time

  // The date the event ends
  end_date: string; // ISO 8601 date and time

  // The time the event starts
  start_time: string;

  // The time the event ends
  end_time: string;

  // A readable display of the event dates
  date_display: string;

  // The time the doors open for this event
  door_time?: string;

  // Number indicating the type of layout this event page uses
  layout_type: number;

  // A string used in the URL for this event
  slug: string;

  // Which entrance to use for this event
  entrance: string;

  // URL to the membership signup page via this event
  join_url?: string;

  // URL to the survey associated with this event
  survey_url?: string;

  // Unique identifier of the host (cf. event programs) that is presenting this event
  event_host_id: number;

  // Unique identifier of the host (cf. event programs) that is presenting this event
  event_host_title: string;

  // Editor-specified list of tags to aid in internal search
  search_tags: string[];

  // Internal field to power the /autocomplete endpoint. Do not use directly.
  suggest_autocomplete_boosted: object;

  // Internal field to power the /autosuggest endpoint. Do not use directly.
  suggest_autocomplete_all: object;

  // Date and time the resource was updated in the source system
  source_updated_at: string; // ISO 8601 date and time

  // Date and time the record was updated in the aggregator database
  updated_at: string; // ISO 8601 date and time

  // Date and time the record was updated in the aggregator search index
  timestamp: string; // ISO 8601 date and time
}
