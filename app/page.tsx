import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { CategoryTaxonomy } from "@/components/site/CategoryTaxonomy";
import { FeatureTabs } from "@/components/site/FeatureTabs";
import { PayrollCompliance } from "@/components/site/PayrollCompliance";
import { MobileAppSpotlight } from "@/components/site/MobileAppSpotlight";
import { PricingCalculator } from "@/components/site/PricingCalculator";
import { Faqs } from "@/components/site/Faqs";
import { Footer } from "@/components/site/Footer";
import { TrialModal } from "@/components/site/TrialModal";
import { TrialModalProvider } from "@/components/site/TrialModalContext";

export default function HomePage() {
  return (
    <TrialModalProvider>
      <Header />
      <main>
        <Hero />
        <CategoryTaxonomy />
        <FeatureTabs />
        <PayrollCompliance />
        <MobileAppSpotlight />
        <PricingCalculator />
        <Faqs />
      </main>
      <Footer />
      <TrialModal />
    </TrialModalProvider>
  );
}
