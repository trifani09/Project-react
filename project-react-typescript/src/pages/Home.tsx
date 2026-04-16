import FeatureCard from '../components/FeatureCard';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-center gap-8 -mt-24 px-10 relative z-10">
        <FeatureCard
          title="Our Global Presence"
          desc="Meeting your business needs through innovative solutions wherever you are"
        />
        <FeatureCard
          title="Market Analysis"
          desc="Explore trends, analysis, and product demand updates"
        />
        <FeatureCard
          title="Request a Product Quote"
          desc="Get a customized quotation based on your product needs"
        />
      </div>
      ;
    </div>
  );
}
