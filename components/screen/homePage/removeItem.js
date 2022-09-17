import React, { useState, useEffect } from "react";
import HorizontalScroller from 'react-horizontal-scroll-container';

// mrx : material ui ↓
import { Grid, IconButton, Slide, Fade, Modal, Backdrop, Box } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";

// mrx : files ↓
import CloseIcon from "../../../public/assets/Icons/Close.svg";
import { BASE_Image_Url } from "../../../pages/api";
import Button from "../../form/Button";
import Cookies from "js-cookie";

// mrx : components ↓

export default function RemoveItem({ setClose, RemoveProduct }) {

  return (
    <>
      {/* White Area */}
      <div className={Style.WhiteArea + " MainScanBarcode4"}>
        <div className={Style.C_WhiteArea}>
          {/* Start Components */}
          <p className={Style.titleLable}>می خواهید کالا مورد نظر حذف شود؟</p>
          <IconButton onClick={setClose} className="ArrowRightBtn"><img src={CloseIcon.src} /></IconButton>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              container
              sm={12}
              xs={12}
              md={12}
              justifyContent="center"
              className="mt-20"
            >
              <Grid
                item
                container
                sm={6}
                xs={6}
                md={6}
                style={{ padding: "0px 0px 0px 8px" }}
              >
                <Button
                  bg="#ff6868"
                  onClick={() => RemoveProduct(parseInt(Cookies.get("removeID")))}
                  lable="حذف شود"
                />
              </Grid>
              <Grid
                item
                container
                sm={6}
                xs={6}
                md={6}
                style={{ padding: "0px 8px 0px 0px" }}
              >
                <Button
                  onClick={setClose}
                  lable="لغو"
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
