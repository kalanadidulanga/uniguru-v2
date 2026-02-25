import { ACCOMMODATION_DESTINATIONS } from "@/constants/data";
import AccommodationCountryPageV2 from "@/components/pages/services/accommodation/AccommodationCountryPageV2";

interface PageProps {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  const paths = ACCOMMODATION_DESTINATIONS.map((item) => ({
    country: item.country,
  }));
  return paths;
}

const Page = ({ params }: PageProps) => {
  return <AccommodationCountryPageV2 params={params} />;
};

export default Page;
