import React, { useState, useContext } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../styles/main/main.module.css";

// mrx : files ↓
import HomeSvg from "../../public/assets/Icons/Home-light.svg";
import HomeSelectedSVG from "../../public/assets/Icons/Home-selected.svg";

import AddSVG from "../../public/assets/Icons/add-light.svg";
import AddSelectedSVG from "../../public/assets/Icons/add-selected.svg";
import SearchSVG from "../../public/assets/Icons/Search.svg";
import SearchSelectedSVG from "../../public/assets/Icons/Selected-Search.svg";

// mrx : context ↓
import { Context } from "../../context/index";
import { Router } from "next/router";

// mrx : components ↓

export default function MainMenu({ setPageSt }) {
  // gm : states ↓
  const {
    Menu,
    setMenu,
  } = useContext(Context);

  return (
    <div className={Style.MainMenu + " cssanimation sequence fadeInBottom"}>
      <div className={Style.C_MainMenu}>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(2); }} size="small">
            <img src={Menu == 2 ? SearchSelectedSVG.src : SearchSVG.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(1); setPageSt(3) }} size="small">
            <img src={Menu == 1 ? AddSelectedSVG.src : AddSVG.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(0); setPageSt(1) }} size="small">
            <img src={Menu == 0 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
