import React, { useState, useEffect, useContext } from 'react';
import { BottomSheet } from "react-spring-bottom-sheet";

// mrx: styles
import AuthStyle from '../../styles/auth/Auth.module.css';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';

export default function TopSheet({
    children,
    HaveImg = false,
    Src = "",
    Height = '',
    topItem
}) {

    return (
        <>
            <Grid
                container
                style={{
                    justifyContent: "center"
                }}
            >
                <Grid
                    item
                    contianer
                    justifyContent="center"
                    className={AuthStyle.TopMainCard}
                    style={{ height: Height ? Height : '' }}
                >
                    <p className={AuthStyle.TopSheetMessage}>{children}</p>
                </Grid>
            </Grid>
            ّ        </>
    )
}
