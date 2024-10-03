import React from "react";

import Years from "../../../../shared/ui/Years";
import { useCircleSliderStore } from "../../store/provider";

import styles from "./YearsSwiper.module.scss";

export default function YearsSwiper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeSlideIndex } = useCircleSliderStore();
  const indexToYearLeft = [1987, 1992, 1999, 2005, 2011, 2015];
  const indexToYearRight = [1991, 1997, 2004, 2010, 2014, 2022];

  return (
    <div className={styles["years-container"]}>
      <Years
        initialStartYear={indexToYearLeft[0]}
        initialEndYear={indexToYearRight[0]}
        startYear={indexToYearLeft[activeSlideIndex]}
        endYear={indexToYearRight[activeSlideIndex]}
      />
      {children}
    </div>
  );
}
