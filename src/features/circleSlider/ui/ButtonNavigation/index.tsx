import React from "react";

import classNames from "classnames";

import ArrowIcon from "../../../../shared/icons/Arrow";

import styles from "./ButtonNavigation.module.scss";

type ButtonNavigationProps = {
  turnArrowToLeft?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function ButtonNavigation({
  turnArrowToLeft,
  disabled,
  onClick,
}: ButtonNavigationProps) {
  const classArrowIcon = classNames(styles["button__icon"], {
    [styles["button__icon--left"]]: turnArrowToLeft,
  });

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.button}
      type="button"
    >
      <ArrowIcon className={classArrowIcon} />
    </button>
  );
}
