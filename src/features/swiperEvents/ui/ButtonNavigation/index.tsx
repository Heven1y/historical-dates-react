import React from "react";

import classNames from "classnames";

import ArrowIcon from "../../../../shared/icons/Arrow";

import styles from "./ButtonNavigation.module.scss";

type ButtonNavigationProps = {
  turnArrowToLeft?: boolean;
  hidden?: boolean;
};

const ButtonNavigation = React.forwardRef<
  HTMLButtonElement | null,
  ButtonNavigationProps
>(function ButtonNavigation(props, ref) {
  const classArrowIcon = classNames(styles["button__icon"], {
    [styles["button__icon--left"]]: props.turnArrowToLeft,
  });
  const classButton = classNames(styles.button, {
    [styles["button--hidden"]]: props.hidden,
  });

  return (
    <button ref={ref} className={classButton} type="button">
      <ArrowIcon className={classArrowIcon} />
    </button>
  );
});

export default ButtonNavigation;
