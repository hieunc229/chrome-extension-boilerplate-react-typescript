import React from "react";

import "./styles.scss";
import cls from "./styles.module.scss";


export default function Popup() {

  return <div className={cls.container}>

    {/* Header */}
    <div className={cls.containerHeader}>
      <b>Tab header</b>
    </div>
    {/* END: Header */}
    
    {/* Body */}
    <div className={cls.containerContent}>
      <div className={cls.centeredBox}>
        <b>{chrome.i18n.getMessage('welcome')}</b>
        <i>
          Mario is the main character of the Mario game series. He is a boy character and is a plumber, 
          as is his brother Luigi. Mario's catchphrase is "Oh yeah! Mario time!"
        </i>
      </div>
    </div>
    {/* END: Body */}

    {/* Footer */}
    <div className={cls.containerPanel}>
      <a className={cls.btnPrimary} href="https://inverr.com" target="_blank">
        Visit homepage →
      </a>
    </div>
    {/* END: Footer */}
  </div >;
}