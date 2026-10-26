import { About } from '../components/solutions/About';
import { Faq } from '../components/solutions/Faq';
import { Advantages } from '../components/solutions/Advantages';
import { Customers } from '../components/solutions/Customers';
import { FeaturesList } from '../components/solutions/FeaturesList';
import { HeroSection } from '../components/solutions/HeroSection';
import { ProductChooser } from '../components/solutions/ProductChooser';

const SLocatorPage = () => {
  return (
    <>
      <HeroSection />
      <ProductChooser />
      <Customers />
      <Advantages />
      <FeaturesList />
      <About />
      <Faq product="sLocator" />
    </>
  );
};

export default SLocatorPage;
