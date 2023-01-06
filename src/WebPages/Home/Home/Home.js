import React from 'react';
import ExcitingNews from '../ExcitingNews/ExcitingNews';
import HeroSection from '../HeroSection/HeroSection';
import MostView from '../MostViewed/MostView';

const Home = () => {

  return (
    <div>
      <HeroSection></HeroSection>
      <ExcitingNews></ExcitingNews>
      <MostView></MostView>
    </div>
  );
};

export default Home;