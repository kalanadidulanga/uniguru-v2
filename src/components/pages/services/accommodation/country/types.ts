export interface AccommodationHeroChip {
  label: string;
}

export interface AccommodationHeroData {
  title: string;
  subline: string;
  support_line: string;
  chips: AccommodationHeroChip[];
  image?: { src: string; alt: string };
}

export interface AccommodationQuickFactsData {
  title: string;
  facts: string[];
  note?: string;
}

export interface AccommodationCostBand {
  label: string;
  range: string;
  description: string;
}

export interface AccommodationCostsPlanningData {
  title: string;
  description: string;
  cost_bands: AccommodationCostBand[];
  disclaimer: string;
}

export interface AccommodationCity {
  name: string;
}

export interface AccommodationChooseCityData {
  title: string;
  cities: AccommodationCity[];
}

export interface AccommodationProperty {
  uniguru_label: string;
  city: string;
  room_type: string;
  price_range: string;
  contract: string;
  available_from: string;
  commute: string;
  features: string[];
}

export interface AccommodationTop10Data {
  title: string;
  subtitle: string;
  properties: AccommodationProperty[];
}

export interface AccommodationWillWontRow {
  will_do: string;
  wont_do: string;
}

export interface AccommodationBoundariesData {
  title: string;
  will_do_heading: string;
  wont_do_heading: string;
  rows: AccommodationWillWontRow[];
}

export interface AccommodationFormData {
  title: string;
  subtitle: string;
  button_label: string;
  micro_text: string;
  disclosure: string;
  trust_line: string;
}

export interface AccommodationCountryDataSet {
  country: string;
  country_name: string;
  secondary_image?: { src: string; alt: string };
  hero_section: AccommodationHeroData;
  quick_facts_section: AccommodationQuickFactsData;
  costs_planning_section: AccommodationCostsPlanningData;
  choose_city_section: AccommodationChooseCityData;
  top_10_section: AccommodationTop10Data;
  boundaries_section: AccommodationBoundariesData;
  form_section: AccommodationFormData;
}
