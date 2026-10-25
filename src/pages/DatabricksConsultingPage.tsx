import { About } from '../components/solutions/About';
import { Advantages } from '../components/solutions/Advantages';
import { Customers } from '../components/solutions/Customers';
import { FeaturesList } from '../components/solutions/FeaturesList';
import { HeroSection } from '../components/solutions/HeroSection';
import { ProductChooser } from '../components/solutions/ProductChooser';

const DatabricksConsultingPage = () => {
  return (
    <>
      <HeroSection />
      <ProductChooser />
      <Customers />
      <Advantages />
      <FeaturesList />
      <About />
    </>
  );
};

export default DatabricksConsultingPage;
