import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Cookies from "js-cookie";
// mrx: styles
import Style from '../../../styles/auth/Auth.module.css';
// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';
// mrx : files
// mrx : components
import AuthPage from '../auth/index';
import RegisterForm from '../auth/registerform';
import HomePage from '../../screen/homePage/index';
import AddProduct from '../homePage/addProduct';

export default function LoadingPage() {
    // mrx : states ↓

    // 0 => SendVerifyCode
    // 1 => ValidateVerifyCode
    const GetPageStatuse = Cookies.get("374bf3fmbghGDNI#%Bi") ? Cookies.get("374bf3fmbghGDNI#%Bi") : 0;

    const [PageSt, setPageSt] = useState(parseInt(GetPageStatuse));
    useEffect(() => {
        Cookies.set("374bf3fmbghGDNI#%Bi", PageSt)
    }, [PageSt])

    // mrx : ↓ --------------------- functions --------------------- ↓

    const getPageSt = () => {
        if (PageSt === 0) {
            return (<AuthPage setPageSt={setPageSt} PageSt={PageSt} />)
        } else if (PageSt === 1) {
            return (<HomePage setPageSt={setPageSt} PageSt={PageSt} />)
        }else if (PageSt === 3) {
            return (<AddProduct setPageSt={setPageSt} PageSt={PageSt} />)
        } else if (PageSt === 4) {
            return (<HomePage setPageSt={setPageSt} PageSt={PageSt} />)
        }
    }

    return (
        <>
            {getPageSt()}
        </>
    )
}
