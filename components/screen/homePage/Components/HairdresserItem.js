import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../../styles/main/main.module.css";

// mrx : files ↓
import SimpleSvg from "../../../../public/assets/Images/Home/Simple1.png";
import starSvg from "../../../../public/assets/Icons/Star.svg";
import starEmptySvg from "../../../../public/assets/Icons/StarEmpty.svg";

// mrx : components ↓

export default function HairDresserItem() {
  // gm : states ↓

  return (
    <div className={Style.ItemHair}>
      <div className={Style.s}>
        <img src={SimpleSvg.src} className={Style.ImgPerson} />
      </div>
      <div className={Style.P_TitleHair}>
        <div className={Style.TitleHairDress}>آرایشگاه مردانه کلوز آپ</div>
        <div className={Style.DeskHairDress}>
          درخواست شما برای پیوستن به کلوز آپ ثبت شد
        </div>
      </div>
      <div className={Style.GroupStar}>
        <img src={starEmptySvg.src} />
        <img src={starEmptySvg.src} />
        <img src={starSvg.src} />
        <img src={starSvg.src} />
        <img src={starSvg.src} />
      </div>
    </div>
  );
}
