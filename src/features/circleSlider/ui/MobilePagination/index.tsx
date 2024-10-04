import React from "react";

import classNames from "classnames";

import categories from "../../../../shared/model/events";
import { useCircleSliderStore } from "../../store/provider";

import styles from "./MobilePagination.module.scss";

export default function MobilePagination() {
  const { activeSlideIndex } = useCircleSliderStore();
  const slidePagesDots = categories.map((categorie, index: number) => {
    const isActive = index === activeSlideIndex;
    const classPoint = classNames(styles["mobile-pagination__point"], {
      [styles["mobile-pagination__point--active"]]: isActive,
    });

    return (
      <div
        key={categorie.id}
        className={classPoint}
        aria-label={`Slide ${index + 1}`}
      />
    );
  });

  return <div className={styles["mobile-pagination"]}>{slidePagesDots}</div>;
}
