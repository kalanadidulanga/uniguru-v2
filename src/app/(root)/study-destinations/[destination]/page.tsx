import StudyDestinationPageV2 from "@/components/pages/stydy-destinations/StudyDestinationPageV2";
import { STUDY_DESTINATIONS_FULLDATA } from "@/constants/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    destination: string;
  };
}

export async function generateStaticParams() {
  return STUDY_DESTINATIONS_FULLDATA.map((item) => ({
    destination: item.destination,
  }));
}

export default async function Page({ params }: PageProps) {
  const { destination } = params;

  const dataSet = STUDY_DESTINATIONS_FULLDATA.find(
    (item) => item.destination === destination
  );

  if (!dataSet) {
    notFound();
  }

  return <StudyDestinationPageV2 dataSet={dataSet} />;
}
