import React from 'react'
import HeroSectionSuccess from '../components/Home/HeroSectionSuccess';
import HeroSection from '@/components/Home/HeroSection';
import DesignSection from '@/components/Home/DesignSection';
import ExploreSection from '@/components/Home/ExploreSection';
import OfferingsSection from '@/components/Home/OfferingsSection';
import CategoriesSection from '@/components/Home/CategoriesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CtaSection from '@/components/Home/CtaSection';


const Home: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <HeroSection />
      <HeroSectionSuccess />
      <DesignSection />
      <ExploreSection />
      <OfferingsSection />
      <CategoriesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

export default Home
