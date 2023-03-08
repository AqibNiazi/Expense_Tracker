import React from "react";

import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let chartBarFillHeight = "0%";

  if (props.maxValue > 0) {
    chartBarFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: chartBarFillHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
