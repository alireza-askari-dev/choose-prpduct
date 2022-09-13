import React, { useState, useEffect, useContext } from 'react';
import { BottomSheet } from "react-spring-bottom-sheet";

// mrx: styles
import AuthStyle from '../../styles/auth/Auth.module.css';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';

export default function BottomSheetCM({
    children,
    HaveImg = false,
    Src = "",
    Height = '',
    topItem,
    ClassName
}) {

    return (
        <>
            {/* <BottomSheet
                    open={true}
                    onDismiss={false}   
                    snapPoints={({ maxHeight }) => [Height * maxHeight]}
                    blocking={false}
                > */}
            <Grid
                item
                contianer
                justifyContent="center"
                className={`${AuthStyle.MainCard} ${ClassName ? ClassName : ""}`}
                style={{ height: Height ? Height : '' }}
            >
                {
                    HaveImg ? (
                        <>
                            <Grid
                                item
                                contianer
                                justifyContent="center"
                                alignItems="center"
                                className={AuthStyle.barber1}
                            >
                                <img alt="person image" className={AuthStyle.BarberImage} src={Src} />
                            </Grid>
                        </>
                    ) : (
                        <></>
                    )
                }

                {
                    topItem ? (
                        topItem
                    ) : (
                        <></>
                    )
                }

                {children}
            </Grid>
            {/* </BottomSheet> */}
        </>
    )
}
