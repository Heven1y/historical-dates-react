import React from "react";

import { SwiperSlide } from "swiper/react";

import CircleSlider from "../../features/circleSlider/ui/CircleSlider";
import SwiperEvents from "../../features/swiperEvents/ui/SwiperEvents";
import categories from "../../shared/model/events";
import Header from "../../shared/ui/Header";
import Layout from "../../shared/ui/Layout";

import styles from "./App.module.scss";

export default function App() {
  return (
    <Layout>
      <div className={styles["main-wrapper"]}>
        <Header />
        <CircleSlider>
          {categories.map((categorie) => {
            return (
              <SwiperSlide key={categorie.id}>
                <SwiperEvents events={categorie.events} />
              </SwiperSlide>
            );
          })}
        </CircleSlider>
        <div className={styles["main-wrapper__centre-line"]} />
      </div>
    </Layout>
  );
}
