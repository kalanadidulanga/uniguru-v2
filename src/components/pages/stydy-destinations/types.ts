/**
 * Shared types for study destination pages.
 * All section content and images are data-driven so destinations can be changed via data.
 */

export interface DestinationImage {
  src: string;
  alt?: string;
}

export interface HeroSectionData {
  title: string;
  description: string;
  images?: DestinationImage[];
}

export interface WhyChooseSectionData {
  title: string;
  content: string;
  bullets?: string[];
}

export interface QuickFactsSectionData {
  title: string;
  facts: string[];
  note?: string;
}

export interface CareersInsightsSectionData {
  title: string;
  content: string;
  images?: DestinationImage[];
}

export interface CostTableRow {
  education_level: string;
  cost_range: string;
}

export interface CostOfStudySectionData {
  title: string;
  table: CostTableRow[];
}

export interface UniversityLink {
  name: string;
  link: string;
}

export interface PopularUniversitiesSectionData {
  title: string;
  universities: UniversityLink[];
}

export interface PopularCoursesSectionData {
  title: string;
  courses: string[];
}

export interface WhoIsItForColumn {
  title: string;
  variant: "best_fit" | "profile_dependent" | "not_recommended";
  points: string[];
}

export interface WhoIsItForSectionData {
  title: string;
  columns: WhoIsItForColumn[];
}

export interface IntakesSectionData {
  intakes: string[];
  description: string;
  cta_label: string;
}

export interface PartnerInstitution {
  name: string;
  logo?: string;
}

export interface PartnerInstitutionsSectionData {
  title: string;
  partners: PartnerInstitution[];
  note?: string;
}

export interface MethodStep {
  step: string;
  title: string;
  description: string;
}

export interface UniguruMethodSectionData {
  title: string;
  intro: string;
  steps: MethodStep[];
  micro_line?: string;
}

export interface IAASectionData {
  title: string;
  registration: string;
  description: string;
  benefits_title: string;
  benefits: string[];
  disclaimer: string;
}

export interface GraduateRouteSectionData {
  title: string;
  content: string;
  eligibility_note: string;
  micro_line?: string;
}

export interface CostItem {
  label: string;
  points: string[];
  footnote?: string;
}

export interface WillWontRow {
  will_do: string;
  wont_do: string;
}

export interface CostsPlanningWillWont {
  title: string;
  will_do_heading: string;
  wont_do_heading: string;
  rows: WillWontRow[];
}

export interface CostsPlanningData {
  title: string;
  description: string;
  costs_title: string;
  cost_items: CostItem[];
  will_wont: CostsPlanningWillWont;
  disclaimer?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionData {
  title: string;
  items: FAQItem[];
  whatsapp_label: string;
  whatsapp_link: string;
}

export interface CTASectionData {
  title: string;
  subtitle: string;
  fields: string[];
  button_label: string;
  micro_text: string;
  trust_line: string;
  disclaimer: string;
}

export interface OpportunityCard {
  heading: string;
  text: string;
  cta_label: string;
  cta_link: string;
  image?: string;
}

export interface OpportunitiesHubSectionData {
  title: string;
  subline: string;
  cards: OpportunityCard[];
  cta_text: string;
  cta_button_label: string;
}

export interface StudyDestinationDataSet {
  destination: string;
  hero_section: HeroSectionData;
  why_choose_section: WhyChooseSectionData;
  quick_facts_section: QuickFactsSectionData;
  who_is_it_for_section?: WhoIsItForSectionData;
  intakes_section?: IntakesSectionData;
  partner_institutions_section?: PartnerInstitutionsSectionData;
  uniguru_method_section?: UniguruMethodSectionData;
  iaa_section?: IAASectionData;
  graduate_route_section?: GraduateRouteSectionData;
  costs_planning_section?: CostsPlanningData;
  faq_section?: FAQSectionData;
  cta_section?: CTASectionData;
  opportunities_hub_section?: OpportunitiesHubSectionData;
  careers_insights_section: CareersInsightsSectionData;
  cost_of_study_section: CostOfStudySectionData;
  popular_universities_section: PopularUniversitiesSectionData;
  popular_courses_section: PopularCoursesSectionData;
  playlistId: string;
}
