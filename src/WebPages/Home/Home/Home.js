import React from 'react';
import AdvertiseSec from '../AdvertiseSec/AdvertiseSec';
import ExcitingNews from '../ExcitingNews/ExcitingNews';
import HeroSection from '../HeroSection/HeroSection';
import MostView from '../MostViewed/MostView';
import NewCode from '../NewCode/NewCode';
import NewTech from '../NewTech/NewTech';
import useTitle from '../../../hook/UseTitle/UseTitle';

const Home = () => {

  useTitle('Home');

  return (
    <div>
      <HeroSection></HeroSection>
      <ExcitingNews></ExcitingNews>
      <MostView></MostView>
      <NewTech></NewTech>
      <NewCode></NewCode>
      <AdvertiseSec></AdvertiseSec>
    </div>
  );
};

export default Home;