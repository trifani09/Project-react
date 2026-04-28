// HomeFeatureCards.tsx
import FeatureCard from '../../../components/FeatureCard';

export default function HomeFeatureCards() {
  return (
    <section className="py-16 flex gap-6 justify-center">
      <FeatureCard title="Quality" desc="Best materials" />
      <FeatureCard title="Global Supply" desc="Worldwide distribution" />
      <FeatureCard title="Trusted" desc="Reliable partner" />
    </section>
  );
}
