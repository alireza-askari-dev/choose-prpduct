import React, { useState, useEffect, useContext } from 'react';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
// mrx: styles
import Style from '../../../styles/auth/Auth.module.css';
// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';
// mrx : files
import MainBg from '../../common/mainBg';
// mrx : components
import Input from '../../form/Input';
import Button from '../../form/Button';
import BottomSheet from '../../common/bottomSheet';
// mrx : api routes
import { SEND_VERIFY_CODE } from '../../../pages/api/index';
// mrx : api config
import { GetUrl } from '../../../pages/api/config';
import BottomSheetCM from '../../common/bottomSheet';
import useWindowSize from '../../../hooks/useWindowSize';

export default function AuthPageSendVCode({
    setPageSt,
    PageSt
}) {    // mrx : states ↓
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [width, height] = useWindowSize();

    // mrx : ↓ --------------------- functions --------------------- ↓
    const disabledSt = () => {
        if ((phoneNumber?.length) != 11) {
            return true
        } else {
            return false
        }
    }

    // call api for login
    const SendVerificationCode = () => {
        setPageSt(1);
        // setLoadingBtn(true);
        // GetUrl(SEND_VERIFY_CODE(phoneNumber)).then((res, err) => {
        //     if (res && res.status === 200) {
        //         setLoadingBtn(false);
        //         if (res?.data?.isSuccess) {
        //             // toast.success(res?.data?.message);
        //             const data = res?.data?.data;
        //             Cookies.set("User_PhoneNumber", data?.phoneNumber);
        //             setPageSt(1);
        //         } else {
        //             setLoadingBtn(false);
        //             toast.error(res?.data?.message);
        //         }
        //     } else {
        //         setLoadingBtn(false);
        //         toast.error("something went wrong !");
        //     }
        // });
    };

    const TopItem = () => {
        return (
            <Grid
                item
                contianer
                justifyContent="center"
                alignItems="center"
                className={Style.StartPerson}
            >
                <img className={Style.StartPersonImage} src='./assets/Images/Main/barber-1.png' />
            </Grid>
        )
    }

    return (
        <>
            <MainBg>
                <Grid
                    item
                    container
                    direction='row'
                    xs={12}
                    sm={12}
                >
                    {/* logo top bobble */}
                    <Grid item contianer>
                        <img className={Style.TopLogo + " in-left"} src='./assets/Images/Main/top-logo.png' alt="top-logo" />
                    </Grid>
                    {/* first bobble */}
                    <Grid item contianer>
                        <img className={Style.TopBooble + " diemend-menu-mobile"} src='./assets/Images/Main/bobble-dark-1.png' alt="bobble-dark-1" />
                    </Grid>
                </Grid>
                {/* second bobble */}
                <Grid className={Style.Bobble2Main} item contianer>
                    <img className={Style.Bibble2Image} src='./assets/Images/Main/bobble-dark-2.png' alt="bobble-dark-2" />
                </Grid>

                <BottomSheetCM ClassName={Style.RadyMainCard + " cssanimation sequence fadeInBottom " + Style.RadyMainCardExtra} Height={width < 960 ? width <= 320 ? 155 : 180 : ''} topItem={TopItem()} HaveImg={false}>
                    <>
                        <Grid
                            item
                            contianer
                            className="mainInfoCard"
                        >
                            {/* detail about card */}
                            <h3 className="CardPupUpTitle">برای ثبت اولین محصول به انبار آماده اید؟</h3>

                            {/* Button */}
                            <Grid
                                item
                                container
                                className="mainBtnAuth mt-30"
                            >
                                <Button
                                    onClick={() => setPageSt(1)}
                                    lable="شروع"
                                />
                            </Grid>
                        </Grid>
                    </>
                </BottomSheetCM>
                {/* main cart */}

            </MainBg>
        </>
    )
}
