import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "./Years.module.scss";

type YearsProps = {
  initialStartYear: number;
  initialEndYear: number;
  startYear: number;
  endYear: number;
};

export default function Years({
  startYear,
  endYear,
  initialStartYear,
  initialEndYear,
}: YearsProps) {
  const startYearRef = React.useRef(null);
  const endYearRef = React.useRef(null);

  useGSAP(() => {
    gsap.to(startYearRef.current, {
      innerText: startYear,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
    gsap.to(endYearRef.current, {
      innerText: endYear,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
  }, [startYear, endYear]);

  return (
    <div className={styles.years}>
      <h2 ref={startYearRef} className={styles["year--start"]}>
        {initialStartYear}
      </h2>
      <h2 ref={endYearRef} className={styles["year--end"]}>
        {initialEndYear}
      </h2>
      <div className={styles["years__horizontal-line"]} />
    </div>
  );
}
