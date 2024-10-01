import React from "react";

import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { EventElementType } from "../../../../shared/model/types";
import EventElement from "../../../../shared/ui/EventElement";
import ButtonNavigation from "../ButtonNavigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./SwiperEvents.module.scss";

type SwiperEventsType = {
  events: EventElementType[];
};

export default function SwiperEvents({ events }: SwiperEventsType) {
  const { t } = useTranslation("features.SwiperEvents");

  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  const [navigationRefs, setNavigationRefs] = React.useState<{
    prevEl?: HTMLElement | null;
    nextEl?: HTMLElement | null;
  }>({
    prevEl: null,
    nextEl: null,
  });

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
      <ButtonNavigation ref={prevButtonRef} turnArrowToLeft />
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        grabCursor
        navigation={navigationRefs}
      >
        {events.map((eventItem) => (
          <SwiperSlide key={eventItem.year}>
            <EventElement year={eventItem.year} text={t(eventItem.text)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonNavigation ref={nextButtonRef} />
    </div>
  );
}
