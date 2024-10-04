import React from "react";

import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BREACKPOINT_MOBILE } from "../../../../shared/config/constants";
import useWindowWidthResize from "../../../../shared/hooks/useWindowWidthResize";
import { EventElementType } from "../../../../shared/model/types";
import EventElement from "../../../../shared/ui/EventElement";
import ButtonNavigation from "../ButtonNavigation";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./SwiperEvents.module.scss";

type SwiperEventsType = {
  events: EventElementType[];
};

type NavigationOptions = {
  prevEl: HTMLElement | null;
  nextEl: HTMLElement | null;
};

export default function SwiperEvents({ events }: SwiperEventsType) {
  const { t } = useTranslation("features.SwiperEvents");
  const windowWidth = useWindowWidthResize();
  const isMobile = windowWidth < BREACKPOINT_MOBILE;

  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  const [navigationRefs, setNavigationRefs] = React.useState<NavigationOptions>(
    {
      prevEl: null,
      nextEl: null,
    },
  );

  React.useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
      setNavigationRefs({
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      });
    }
  }, []);

  return (
    <div className={styles["swiper__wrapper"]}>
      <ButtonNavigation hidden={isMobile} ref={prevButtonRef} turnArrowToLeft />
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        grabCursor
        navigation={navigationRefs}
        breakpoints={{
          1000: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {events.map((eventItem) => (
          <SwiperSlide key={eventItem.year}>
            <EventElement year={eventItem.year} text={t(eventItem.text)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonNavigation hidden={isMobile} ref={nextButtonRef} />
    </div>
  );
}
