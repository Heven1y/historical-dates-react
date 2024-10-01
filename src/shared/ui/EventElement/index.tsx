import React from "react";

import { EventElementType } from "../../model/types";

import styles from "./EventElement.module.scss";

export default function EventElement({ year, text }: EventElementType) {
  return (
    <div className={styles["event-element"]}>
      <h4 className={styles["event-element__year"]}>{year}</h4>
      <p className={styles["event-element__text"]}>{text}</p>
    </div>
  );
}
