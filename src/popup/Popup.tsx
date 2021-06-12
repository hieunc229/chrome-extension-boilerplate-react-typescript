import React from "react";

import "./styles.scss";
import cls from "./styles.module.scss";


export default function Popup() {

  return <div className={cls.container}>
    <div className={cls.containerHeader}>
      <b>Tab header</b>
    </div>
    <div className={cls.centeredBox}>
      <h2>{chrome.i18n.getMessage('welcome')}</h2>
    </div>
    <div className={cls.containerPanel}>
      <button className={cls.btnPrimary}>Visit homepage</button>
    </div>
  </div >;
}