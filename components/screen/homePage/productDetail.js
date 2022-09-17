import React, { useState, useEffect } from "react";
import HorizontalScroller from 'react-horizontal-scroll-container';

// mrx : material ui ↓
import { Grid, IconButton, Slide, Fade, Modal, Backdrop, Box } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";

// mrx : files ↓
import ArrowRight from "../../../public/assets/Icons/Arrow right -.svg";
import { BASE_Image_Url } from "../../../pages/api";

// mrx : components ↓

export default function ProductDetail({ ProductDt, setPageSt }) {
  const [SelectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    setSelectedImage(ProductDt?.images?.map((item) => item?.url)[0]);
  }, [ProductDt])


  return (
    <>
      {/* White Area */}
      <div className={Style.WhiteArea + " MainScanBarcode3"}>
        <div className={Style.C_WhiteArea}>
          {/* Start Components */}
          <p className={Style.titleLable}>{ProductDt?.barcode}</p>
          <IconButton onClick={() => setPageSt(false)} className="ArrowRightBtn"><img src={ArrowRight.src} /></IconButton>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              container
              className="mainBtnAuth mt-10 main2ImageProductSingle"
            >
              <img className="mainImageProductSingle" src={BASE_Image_Url + SelectedImage} />

            </Grid>
            <HorizontalScroller >
              {
                ProductDt?.images?.map(item => (
                  <img
                    key={item?.id}
                    onClick={() => setSelectedImage(item?.url)}
                    className="producteachsingle"
                    width="28%"
                    height="80px"
                    src={BASE_Image_Url + item?.url}
                    alt={item?.url}
                  />
                ))
              }
            </HorizontalScroller>
          </Grid>
        </div>
      </div>
    </>
  );
}
