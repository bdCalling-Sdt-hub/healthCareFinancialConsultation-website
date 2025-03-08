import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";
import Horizon from "./Horizon";
import OurServices from "./ourServices/OurServices";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";

const MainHome = () => {
  return (
    <div>
      <Banner />
      <AboutUsSection />
      <OurServices />
      <Horizon />
      <WhatMakesUsDifferent />
    </div>
  );
};

export default MainHome;
