import React, { useEffect, useState } from 'react';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';
import { CircularProgress } from "@material-ui/core";
// mrx : files

export default function ResendButton({
    lable = 'دکمه',
    disabled = false,
    onClick = () => { },
    width = '100',
    loading = false
}) {

    return (
        <Grid
            onClick={() => !disabled && onClick()}
            item
            container
            direction='column'
            alignItems='center'
            className={`${disabled ? 'ResendBtnDisabled' : 'ResendMainButton'}`}
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
