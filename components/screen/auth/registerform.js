import React, { useState, useEffect, useContext } from 'react';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
// mrx: styles
import Style from '../../../styles/auth/Auth.module.css';
// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';
// mrx : files
// mrx : components
import MainBg from '../../common/mainBg';
import Input from '../../form/Input';
import Button from '../../form/Button';
import BottomSheet from '../../common/bottomSheet';
import TopSheet from '../../common/topSheet';
import useWindowSize from "../../../hooks/useWindowSize";
// mrx : api routes
import { SEND_VERIFY_CODE } from '../../../pages/api/index';
// mrx : api config
import { GetUrl } from '../../../pages/api/config';

// mrx: validate user
import { ValidateUserRegister, RegisterTextEnum } from '../../../hooks/helper/validateUserRegister';

export default function RegisterForm({
    setPageSt,
    PageSt
}) {
    const GetPhoneNumber = Cookies.get("User_PhoneNumber")

    // mrx : states ↓
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState("");

    const [loadingBtn, setLoadingBtn] = useState(false);
    const [textEnum, setTextEnum] = useState(0);
    const [width, height] = useWindowSize();

    // mrx : ↓ --------------------- functions --------------------- ↓
    const disabledSt = () => {
        if ((phoneNumber?.length) < 11) {
            return true
        } else if (!(name?.length)) {
            return true
        } else if (!(userName?.length)) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        setPhoneNumber(GetPhoneNumber)
    }, [])


    // call api for login
    const RegisterUser = () => {
        setLoadingBtn(true);
        GetUrl(SEND_VERIFY_CODE(phoneNumber)).then((res, err) => {
            if (res && res.status === 200) {
                setLoadingBtn(false);
                if (res?.data?.isSuccess) {
                    // toast.success(res?.data?.message);
                    const data = res?.data?.data;
                    Cookies.set("User_PhoneNumber", data?.phoneNumber);
                    setPageSt(1);
                } else {
                    setLoadingBtn(false);
                    toast.error(res?.data?.message);
                }
            } else {
                setLoadingBtn(false);
                toast.error("something went wrong !");
            }
        });
    };

    const TopItem = () => {
        return (
            <Grid
                item
                contianer
                justifyContent="center"
                alignItems="center"
                className={Style.PersonQA}
            >
                <img className={Style.PersonQAImage} src='./assets/Images/Main/qaMan.png'
                    alt={
                        RegisterTextEnum?.filter((item) => item?.id === textEnum)?.map((item) => item?.title)
                    }
                />
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
                    <TopSheet>
                        {
                            RegisterTextEnum?.filter((item) => item?.id === textEnum)?.map((item) => item?.title)
                        }
                    </TopSheet>

                </Grid>
                <BottomSheet ClassName={Style.RegisterMainCard} topItem={TopItem()} HaveImg={false}>
                    <>
                        <Grid
                            item
                            contianer
                            className="mainInfoCard"
                            style={{ marginTop: width <= 320 ? '0px' : '-15px' }}
                        >
                            <Grid
                                item
                                container
                                className="mt-20-register"
                                onClick={() => toast.info('پس از اتمام مراحل میتوانید شماره تماس خود را تغییر دهید.')}
                            >
                                <Input
                                    disabled={true}
                                    min={11}
                                    max={11}
                                    type="number"
                                    value={phoneNumber}
                                    setValue={setPhoneNumber}
                                    Succes={true}
                                    SuccesMessage={<> شماره موبایل تایید شده</>}
                                    placeholder="مثلاً ۰۹۱۲۳۴۵۶۷۸۹"
                                    lable="شماره موبایل *"
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                className="mt-30"
                            >
                                <Input
                                    min={3}
                                    type="text"
                                    value={name}
                                    setValue={setName}
                                    placeholder="نام و نام خانوادگی خود را وارد کنید."
                                    lable="نام و نام خانوادگی *"
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                className="mt-20-register"
                            >
                                <Input
                                    min={3}
                                    max={10}
                                    type="text"
                                    value={userName}
                                    setValue={setUserName}
                                    placeholder="مثلاً، مای مارکت ..."
                                    lable="نام کاربری *"
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                className="mt-20-register"
                            >
                                <Input
                                    min={11}
                                    max={11}
                                    type="text"
                                    value={userData}
                                    setValue={setUserData}
                                    placeholder="تاریخ تولد خود را وارد کنید."
                                    lable="تاریخ تولد"
                                />
                            </Grid>
                            {/* Button */}
                            <Grid
                                item
                                container
                                className="mainBtnRegister"
                            >
                                <Button
                                    disabled={disabledSt()}
                                    // onClick={() => SendVerificationCode()}
                                    lable="مرحله بعد"
                                    loading={loadingBtn}
                                />
                            </Grid>
                        </Grid>
                    </>
                </BottomSheet>

                {/* main cart */}

            </MainBg>
        </>
    )
}
