import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../styles/main/main.module.css";

// mrx : files ↓
import HomeSvg from "../../public/assets/Icons/Home.svg";
import BellSvg from "../../public/assets/Icons/Bell.svg";
import ContactsSvg from "../../public/assets/Icons/Contacts.svg";
import OrdersSvg from "../../public/assets/Icons/Orders.svg";
import GallerySvg from "../../public/assets/Icons/Gallery.svg";

// mrx : components ↓

export default function MainMenu() {
  // gm : states ↓

  return (
    <div className={Style.MainMenu + " cssanimation sequence fadeInBottom"}>
      <div className={Style.C_MainMenu}>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={BellSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={ContactsSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={OrdersSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={GallerySvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={HomeSvg.src} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
