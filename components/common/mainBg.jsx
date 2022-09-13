import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

// mrx: styles
import Style from '../../styles/main/main.module.css';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';

// mrx : files
import LogoTop from '../../public/assets/Images/Main/top-logo.png'

// mrx : Landing page ↓
export default function MainBg({ children }) {
    // mrx : states ↓

    // mrx : ↓ --------------------- functions --------------------- ↓

    return (
        <>
            <Grid
                item
                className="background"
            >
                <Grid
                    item
                    container
                    className={Style.Main}
                >
                    {children}
                </Grid>
            </Grid>
        </>
    )
}
