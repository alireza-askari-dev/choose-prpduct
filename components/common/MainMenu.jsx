import React, { useState, useContext } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../styles/main/main.module.css";

// mrx : files ↓
import HomeSvg from "../../public/assets/Icons/Home-light.svg";
import HomeSelectedSVG from "../../public/assets/Icons/Home-selected.svg";

import BellSvg from "../../public/assets/Icons/Bell.svg";
import ContactsSvg from "../../public/assets/Icons/Contacts.svg";
import OrdersSvg from "../../public/assets/Icons/Orders.svg";
import GallerySvg from "../../public/assets/Icons/Gallery.svg";

// mrx : context ↓
import { Context } from "../../context/index";
import { Router } from "next/router";

// mrx : components ↓

export default function MainMenu() {
  // gm : states ↓
  const {
    Menu,
    setMenu,
  } = useContext(Context);

  return (
    <div className={Style.MainMenu + " cssanimation sequence fadeInBottom"}>
      <div className={Style.C_MainMenu}>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={Menu == 4 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={Menu == 3 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton size="small">
            <img src={Menu == 2 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(1) }} size="small">
            <img src={Menu == 1 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(0) }} size="small">
            <img src={Menu == 0 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
