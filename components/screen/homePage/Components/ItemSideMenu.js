import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../../styles/main/main.module.css";

// mrx : files ↓
import ArrowLeftSvg from "../../../../public/assets/Icons/ArrowLeft.svg";

// mrx : components ↓

export default function ItemSideMenu({Title, Icon}) {
  // gm : states ↓

  return (
    <div className={Style.ItemSideMenu}>
      <div>
      <img src={Icon.src} className={Style.SvgItem}/>  {Title}
      </div>
      <div>
        <img src={ArrowLeftSvg.src} className={Style.ArrowSvg}/>
      </div>
    </div>
  );
}
