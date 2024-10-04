import React from "react";

import { CircleSliderStoreProvider } from "../../features/circleSlider/store/provider";
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
        <CircleSliderStoreProvider totalSlides={categories.length}>
          <CircleSlider>
            {categories.map((categorie) => {
              return (
                <div key={categorie.id}>
                  <SwiperEvents events={categorie.events} />
                </div>
              );
            })}
          </CircleSlider>
        </CircleSliderStoreProvider>
        <div className={styles["main-wrapper__centre-line"]} />
      </div>
    </Layout>
  );
}
