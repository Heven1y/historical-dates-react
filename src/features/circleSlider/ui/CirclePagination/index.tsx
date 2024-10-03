import React from "react";

import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";

import { RADIUS_CIRCLE } from "../../config/constants";
import { useCircleSliderStore } from "../../store/provider";

import styles from "./CirclePagination.module.scss";

export default function CirclePagination() {
  const { activeSlideIndex, toSlide, totalSlides } = useCircleSliderStore();
  const circleRef = React.useRef(null);

  const handlePointClick = (index: number) => {
    toSlide(index);
  };

  const angleStep = 360 / totalSlides;
  const rotateAngle = activeSlideIndex * angleStep;

  useGSAP(() => {
    const points = gsap.utils.toArray(".point");
    gsap.to(circleRef.current, {
      rotate: -rotateAngle,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(points, {
      rotate: rotateAngle,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [rotateAngle]);

  const slidePages = Array.from({ length: totalSlides }).map(
    (_, index: number) => {
      const angle = (index - 1) * angleStep * (Math.PI / 180); // переводим градусы в радианы
      const x = RADIUS_CIRCLE * Math.cos(angle); // x-координата
      const y = RADIUS_CIRCLE * Math.sin(angle); // y-координата
      const isActive = index === activeSlideIndex;
      const classPoint = classNames(styles.point, "point", {
        [styles.active]: isActive,
      });

      return (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="button"
          className={classPoint}
          style={{
            transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
          }}
          onClick={() => handlePointClick(index)}
        >
          {index}
        </button>
      );
    },
  );

  return (
    <div className={styles.circle} ref={circleRef}>
      {slidePages}
    </div>
  );
}
