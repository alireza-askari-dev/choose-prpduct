import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";
import AuthStyle from '../../../styles/auth/Auth.module.css';

// mrx : files ↓
import ArrowRight from "../../../public/assets/Icons/Arrow right -.svg";

// mrx : components ↓
import Scanner from '../../form/barcodeScanner/Scanner';
import Result from '../../form/barcodeScanner';
import Button from '../../form/Button';

export default function AddProduct({ setPageSt }) {
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
          <p className={Style.titleLable}>افزودن کالا</p>
          <IconButton className="ArrowRightBtn"><img src={ArrowRight.src} /></IconButton>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Scanner handleScan={this._onDetected} />
            <Grid
              item
              container
              className="mainBtnAuth mt-30"
            >
              <Button
                disabled={true}
                width={50}
                lable="مرحله بعد"
              />
              <Button
                width={50}
                lable="اسکن دوباره"
              />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* <MainMenu setPageSt={setPageSt} /> */}
    </div>
  );
}
