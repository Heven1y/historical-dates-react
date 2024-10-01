import React from "react";

import classNames from "classnames";

import ArrowIcon from "../../../../shared/icons/Arrow";

import styles from "./ButtonNavigation.module.scss";

type ButtonNavigationProps = {
  turnArrowToLeft?: boolean;
};

const ButtonNavigation = React.forwardRef<
  HTMLButtonElement | null,
  ButtonNavigationProps
>(function ButtonNavigation(props, ref) {
  const classArrowIcon = classNames(styles["button__icon"], {
    [styles["button__icon--left"]]: props.turnArrowToLeft,
  });

  return (
    <button ref={ref} className={styles.button} type="button">
      <ArrowIcon className={classArrowIcon} />
    </button>
  );
});

export default ButtonNavigation;
