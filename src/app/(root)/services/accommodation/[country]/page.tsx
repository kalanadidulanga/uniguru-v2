import { ACCOMMODATION_COUNTRY_FULLDATA } from "@/constants/accommodation-country-data";
import AccommodationCountryPage from "@/components/pages/services/accommodation/country/AccommodationCountryPage";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  return ACCOMMODATION_COUNTRY_FULLDATA.map((item) => ({
    country: item.country,
  }));
}

const Page = ({ params }: PageProps) => {
  const dataSet = ACCOMMODATION_COUNTRY_FULLDATA.find(
    (d) => d.country === params.country
  );

  if (!dataSet) return notFound();

  return <AccommodationCountryPage dataSet={dataSet} />;
};

export default Page;
