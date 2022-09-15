import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Button, Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";
import AuthStyle from '../../../styles/auth/Auth.module.css';

import MainMenu from "../../common/MainMenu";
import SideMenu from "./Components/SideMenu";
import Product from "./Components/product";

// mrx : files ↓
import ImageItem1 from "../../../public/assets/Home/112582_Rear_3-4_Web.jpg";
import ImageItem2 from "../../../public/assets/Home/162631682664400.png";
import ImageItem3 from "../../../public/assets/Home/dc4b04d78fcf5d825262ebb70137e0be.png";

// mrx : components ↓

export default function AddProduct({setPageSt}) {
  // gm : states ↓

  return (
    <div className={Style.OrageBg}>
      {/* tilte */}
      <div className={Style.P_BarberTitle}>
        <Grid
          item
          container
          direction='row'
          xs={12}
          sm={12}
        >
          {/* logo top bobble */}
          <Grid item contianer>
            <img className={AuthStyle.TopLogo2 + " in-left"} src='./assets/Images/Main/top-logo.png' alt="top-logo" />
          </Grid>

        </Grid>
        {/* <div>
          <SideMenu />
        </div> */}
      </div>
      {/* White Area */}
      <div className={Style.WhiteArea}>
        <div className={Style.C_WhiteArea}>
          {/* Start Components */}
          <p className={Style.titleLable}>لیست کالا ها</p>
         
        </div>
      </div>

      <MainMenu setPageSt={setPageSt} />
    </div>
  );
}
