import React from "react";

import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";

export default function Header() {
  const { t } = useTranslation("shared.Header");
  return (
    <header className={styles.header}>
      <h1 className={styles["header__text"]}>{t("title")}</h1>
    </header>
  );
}
