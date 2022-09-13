import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../../styles/main/main.module.css";

// mrx : files ↓
import BellPng from "../../../../public/assets/Images/Main/Bell.png";
import MoreSvg from "../../../../public/assets/Icons/more.svg";


// mrx : components ↓

export default function NotificationNews() {
  // gm : states ↓

  return (
    <div className={Style.ItemHair}>
      <div className={Style.s}>
        <img src={BellPng.src} className={Style.ImgPerson} />
      </div>
      <div className={Style.P_TitleHair}>
        <div className={Style.TitleBell}>
          ده روز دیگر تا زمان اصلاح مو های شما باقی مانده آیا مایل به گرفتن نوبت
          هستید؟
        </div>
      </div>
      <div className={Style.MoreSvg}>
        <IconButton size='small'>
            <img src={MoreSvg.src}/>
        </IconButton>
      </div>
    </div>
  );
}
