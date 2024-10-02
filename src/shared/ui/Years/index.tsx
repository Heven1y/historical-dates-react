import React from "react";

import styles from "./Years.module.scss";

type YearsProps = {
  startYear: number;
  endYear: number;
};

export default function Years({ startYear, endYear }: YearsProps) {
  return (
    <div className={styles.years}>
      <h2 className={styles["year--start"]}>{startYear}</h2>
      <h2 className={styles["year--end"]}>{endYear}</h2>
      <div className={styles["years__horizontal-line"]} />
    </div>
  );
}
