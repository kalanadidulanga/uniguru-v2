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
}

export interface QuickFactsSectionData {
  title: string;
  facts: string[];
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

export interface StudyDestinationDataSet {
  destination: string;
  hero_section: HeroSectionData;
  why_choose_section: WhyChooseSectionData;
  quick_facts_section: QuickFactsSectionData;
  careers_insights_section: CareersInsightsSectionData;
  cost_of_study_section: CostOfStudySectionData;
  popular_universities_section: PopularUniversitiesSectionData;
  popular_courses_section: PopularCoursesSectionData;
  playlistId: string;
}
