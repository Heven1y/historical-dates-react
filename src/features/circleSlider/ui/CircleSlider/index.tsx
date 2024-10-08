import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { BREACKPOINT_MOBILE } from "../../../../shared/config/constants";
import useWindowWidthResize from "../../../../shared/hooks/useWindowWidthResize";
import categories from "../../../../shared/model/events";
import { useCircleSliderStore } from "../../store/provider";
import CirclePagination from "../CirclePagination";
import MobilePagination from "../MobilePagination";
import NavigationSwiper from "../NavigationSwiper";
import YearsSwiper from "../YearsSwiper";

import styles from "./CircleSlider.module.scss";

type CircleSliderProps = {
  children: React.ReactNode;
};

function CircleSlider({ children }: CircleSliderProps) {
  const childrenArray = React.Children.toArray(children);
  const windowWidth = useWindowWidthResize();
  const slideRef = React.useRef(null);
  const { activeSlideIndex } = useCircleSliderStore();
  const { t } = useTranslation("features.CircleSlider");

  const [animationIndexSlide, setAnimationIndexSlide] =
    React.useState(activeSlideIndex);

  const chnageSlide = () => {
    setAnimationIndexSlide(activeSlideIndex);
  };

  useGSAP(() => {
    if (slideRef.current) {
      gsap
        .timeline()
        .fromTo(
          slideRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: 20, duration: 0.5, onComplete: chnageSlide },
        )
        .fromTo(
          slideRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
        );
    }
  }, [activeSlideIndex]);

  const isMobile = windowWidth < BREACKPOINT_MOBILE;

  return (
    <div className={styles["circle-slider"]}>
      <YearsSwiper>{!isMobile && <CirclePagination />}</YearsSwiper>
      <div className={styles["circle-slider__wrapper"]}>
        <div className={styles["circle-slider__pagination"]}>
          <NavigationSwiper />
          {isMobile && <MobilePagination />}
        </div>
        <div className={styles.slide} ref={slideRef}>
          {isMobile && (
            <div className={styles["slide__title-wrapper"]}>
              <h4 className={styles["slide__title"]}>
                {t(categories[animationIndexSlide].id)}
              </h4>
            </div>
          )}
          {childrenArray[animationIndexSlide]}
        </div>
      </div>
    </div>
  );
}

export default observer(CircleSlider);
