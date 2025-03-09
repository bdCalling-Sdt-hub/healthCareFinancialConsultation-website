import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";
import Horizon from "./Horizon";
import OurServices from "./ourServices/OurServices";
import WhatClientsSay from "./Review/WhatClientsSay";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";

const MainHome = () => {
  return (
    <div>
      <Banner />
      <AboutUsSection />
      <OurServices />
      <Horizon />
      <WhatMakesUsDifferent />
      <WhatClientsSay />
    </div>
  );
};

export default MainHome;
