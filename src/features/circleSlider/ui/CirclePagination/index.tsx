import React from "react";

import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

import categories from "../../../../shared/model/events";
import { RADIUS_CIRCLE } from "../../config/constants";
import { useCircleSliderStore } from "../../store/provider";

import styles from "./CirclePagination.module.scss";

export default function CirclePagination() {
  const { activeSlideIndex, toSlide, totalSlides } = useCircleSliderStore();
  const circleRef = React.useRef(null);
  const { t } = useTranslation("features.CirclePagination");

  const angleStep = 360 / totalSlides;
  const rotateAngle = activeSlideIndex * angleStep;

  useGSAP(() => {
    const slideIndexes = gsap.utils.toArray(".slideIndex");
    const slideNames = gsap.utils.toArray(".slideName");
    gsap.to(circleRef.current, {
      rotate: -rotateAngle,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(slideIndexes, {
      rotate: rotateAngle,
      duration: 1,
      ease: "none",
    });
    gsap
      .timeline()
      .to(slideNames, {
        rotate: rotateAngle,
        duration: 1,
        ease: "none",
      })
      .to(slideNames, {
        opacity: 1,
        duration: 0.3,
        ease: "none",
      });
  }, [rotateAngle]);

  const slidePagesCircle = categories.map((categorie, index: number) => {
    const isActive = index === activeSlideIndex;
    const angle = (index - 1) * angleStep * (Math.PI / 180);
    const x = RADIUS_CIRCLE * Math.cos(angle);
    const y = RADIUS_CIRCLE * Math.sin(angle);
    const classPoint = classNames(styles.point, {
      [styles["point--active"]]: isActive,
    });
    const classNameSlide = classNames("slideName", styles["point__slide-name"]);
    const classIndexSlide = classNames(
      "slideIndex",
      styles["point__slide-index"],
    );

    return (
      <button
        key={categorie.id}
        type="button"
        className={classPoint}
        style={{
          transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        }}
        onClick={() => toSlide(index)}
      >
        <span className={classIndexSlide}>{index + 1}</span>
        {isActive && <span className={classNameSlide}>{t(categorie.id)}</span>}
      </button>
    );
  });

  return (
    <div className={styles.circle} ref={circleRef}>
      {slidePagesCircle}
    </div>
  );
}
