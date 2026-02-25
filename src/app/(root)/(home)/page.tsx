import HeroSection from "@/components/homev2/HeroSection";
import VideoSection from "@/components/homev2/VideoSection";
import StudyDestinations from "@/components/homev2/StudyDestinations";
import WhyUniguru from "@/components/homev2/WhyUniguru";
import HowWeHelp from "@/components/homev2/HowWeHelp";
import Testimonials from "@/components/homev2/Testimonials";
import LatestNews from "@/components/homev2/LatestNews";

const Page = () => {
  return (
    <>
      {/* Hero Section with Trust Bar */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection />

      {/* Study Destinations Section */}
      <StudyDestinations />

      {/* Why Uniguru Section */}
      <WhyUniguru />

      {/* How We Help Section */}
      <HowWeHelp />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Latest News Section */}
      <LatestNews />
    </>
  );
};

export default Page;
