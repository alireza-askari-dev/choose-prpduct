import React, { useEffect, useState } from 'react';
import VerificationInput from "react-verification-input";

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';
import { CircularProgress } from "@material-ui/core";
// mrx : files

export default function CodeInput({
    setCode,
    code,
    Count = 6,
    placeholder = '_',
    type = 'tel',
}) {

    return (
        <Grid
            item
            container
            direction='column'
            alignItems='center'
        >
            <VerificationInput
                classNames={{
                    container: "container",
                    character: "character",
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                }}
                placeholder={placeholder}
                validChars="0-9"
                inputProps={{ type: { type }, autoComplete: "one-time-code" }}
                length={Count}
                value={code}
                onChange={(e) => setCode(e)}
            />

        </Grid >
    )
}
