import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";
import BookNow from "./BookNow";
import Horizon from "./Horizon";
import OurServices from "./ourServices/OurServices";
import WhatClientsSay from "./Review/WhatClientsSay";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";

const MainHome = () => {
  return (
    <div className="bg-white">
      <Banner />
      <AboutUsSection />
      <OurServices />
      <Horizon />
      <WhatMakesUsDifferent />
      <WhatClientsSay />
      <BookNow />
    </div>
  );
};

export default MainHome;
