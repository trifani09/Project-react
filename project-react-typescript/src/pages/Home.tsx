import MainLayout from '../components/layout/MainLayout';
import HomeHero from '../features/home/sections/HomeHero';
import HomeFeatureCards from '../features/home/sections/HomeFeatureCards';

export default function Home() {
  return (
    <MainLayout>
      <HomeHero />
      <HomeFeatureCards />
    </MainLayout>
  );
}
