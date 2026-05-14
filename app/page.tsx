"use client";

import { Hero } from "@/components/Hero";
import { AboutIMSA } from "@/components/AboutIMSA";
import { OPTModel } from "@/components/OPTModel";
import { EducationalPhilosophy } from "@/components/EducationalPhilosophy";
import { IMSAMethod } from "@/components/IMSAMethod";
import { WhyNASM } from "@/components/WhyNASM";
import { WhyIMSA } from "@/components/WhyIMSA";
import { IndustryStats } from "@/components/IndustryStats";
import { OurCourses } from "@/components/OurCourses";
import { CourseDelivery } from "@/components/CourseDelivery";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Faculty } from "@/components/Faculty";
import { FreeMasterclass } from "@/components/FreeMasterclass";
import { CareerPathways } from "@/components/CareerPathways";
import { AdmissionsProcess } from "@/components/AdmissionsProcess";
import { UpcomingIntakes } from "@/components/UpcomingIntakes";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Testimonials } from "@/components/Testimonials";
import { CorporatePartnership } from "@/components/CorporatePartnership";
import { LearningEnvironment } from "@/components/LearningEnvironment";
import { GlobalRecognition } from "@/components/GlobalRecognition";
import { PartnershipSection } from "@/components/PartnershipSection";
import { PricingSection } from "@/components/PricingSection";
import { VisionMission } from "@/components/VisionMission";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative bg-swiss-white">
      <Preloader onComplete={() => setIsLoaded(true)} />
      <Navbar />
      <Hero startAnimation={isLoaded} />
      
      {/* Refined Section Stack */}
      <AboutIMSA />
      <OPTModel />
      <EducationalPhilosophy />
      <IMSAMethod />
      <WhyNASM />
      <WhyIMSA />
      <IndustryStats />
      <OurCourses />
      <CourseDelivery />
      <WhyDifferent />
      <Faculty />
      <FreeMasterclass />
      <CareerPathways />
      <AdmissionsProcess />
      <UpcomingIntakes />
      <WhoIsItFor />
      <Testimonials />
      <CorporatePartnership />
      <LearningEnvironment />
      <GlobalRecognition />
      <PartnershipSection />
      <PricingSection />
      <VisionMission />
      <CTASection />
      <FAQSection />
      
      <Footer />
    </main>
  );
}
