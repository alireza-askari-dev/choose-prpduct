import React, { useEffect, useState } from 'react';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';
import { CircularProgress } from "@material-ui/core";
// mrx : files

export default function Button({
    lable = 'دکمه',
    disabled = false,
    onClick = () => { },
    width = '100',
    loading = false,
    style,
}) {

    return (
        <Grid
            onClick={() => !disabled && onClick()}
            item
            container
            direction='column'
            alignItems='center'
            className={`${disabled ? 'BtnDisabled' : 'mainButton'}`}
            style={{ width: width + '%' }}
        >
            {
                loading ? (
                    <CircularProgress color="white" size={20} />
                ) : (
                    <lable className='ButtonLable'>
                        {lable}
                    </lable>
                )
            }

        </Grid >
    )
}
