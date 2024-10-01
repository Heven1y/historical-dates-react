import React from "react";

import styles from "./EventElement.module.scss";

type EventElementProps = {
  year: number;
  text: string;
};

export default function EventElement({ year, text }: EventElementProps) {
  return (
    <div className={styles["event-element"]}>
      <h4 className={styles["event-element__year"]}>{year}</h4>
      <p className={styles["event-element__text"]}>{text}</p>
    </div>
  );
}
