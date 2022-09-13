import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

// mrx: styles
import Style from '../../../styles/StartPage.module.css';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';

// mrx : files
import Logo from '../../../public/assets/Images/Cart/logo.webp'
import MainBg from '../../common/mainBg';

// mrx : Landing page ↓
export default function StartPage() {
    // mrx : states ↓

    // mrx : ↓ --------------------- functions --------------------- ↓

    return (
        <>
            <Grid
                item
                container
                className={Style.background}
                alignItems="center"
                justifyContent="center"
            >
                <img className={Style.title} src={Logo.src} />
                <p className={Style.version}>
                    v<span className="p-number">1.1</span>
                </p>
            </Grid>ّ
        </>
    )
}
