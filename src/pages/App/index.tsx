import React from "react";

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
        <SwiperEvents events={categories[0]} />
      </div>
    </Layout>
  );
}
