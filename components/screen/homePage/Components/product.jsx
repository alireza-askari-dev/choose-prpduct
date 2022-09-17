import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../../styles/main/main.module.css";

// mrx : files ↓
import TrashIcon from "../../../../public/assets/Icons/trash-light.svg";
import Cookies from "js-cookie";

// mrx : components ↓

export default function Product({ setDeleteProduct, img, id, code, onClick }) {
    // gm : states ↓

    return (
        <Grid
            container
            item
            sm={6}
            md={6}
            lg={3}
            xs={6}
            className={Style.MainProduct}
            spacing={0}
        >
            <IconButton
                className="trahPic2"
                onClick={() => { setDeleteProduct(true); Cookies.set("removeID", id) }}
            >
                <img src={TrashIcon.src} />
            </IconButton>
            <Grid
                item
                container
                onClick={onClick}
                className={Style.Product}
            >
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={Style.mainProductImg}
                >
                    <img src={img} className={Style.ProductImg} />
                </Grid>
                <p className={Style.ProductText}>{code}</p>
            </Grid>
        </Grid>
    );
}
