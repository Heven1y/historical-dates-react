import React from "react";

import { SwiperClass, useSwiper } from "swiper/react";

import Years from "../../../../shared/ui/Years";

export default function YearsSwiper() {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = React.useState(swiper.activeIndex);

  React.useEffect(() => {
    swiper.on("slideChange", (swipe: SwiperClass) => {
      setActiveIndex(swipe.activeIndex);
    });

    return () => {
      swiper.off("slideChange");
    };
  }, [swiper]);

  const indexToYearLeft = [1987, 1992, 1999, 2005, 2011, 2015];

  const indexToYearRight = [1991, 1997, 2004, 2010, 2014, 2022];

  return (
    <Years
      startYear={indexToYearLeft[activeIndex]}
      endYear={indexToYearRight[activeIndex]}
    />
  );
}
