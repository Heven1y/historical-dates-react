import React from "react";

import Header from "../../shared/ui/Header";
import Layout from "../../shared/ui/Layout";

import styles from "./App.module.scss";

export default function App() {
  return (
    <Layout>
      <div className={styles["main-wrapper"]}>
        <Header />
      </div>
    </Layout>
  );
}
