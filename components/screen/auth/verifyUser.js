import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
// mrx: styles
import Style from "../../../styles/auth/Auth.module.css";
// mrx : material ui
import { Grid, container, Typography, Box } from "@material-ui/core";
// mrx : files
import MainBg from "../../common/mainBg";
// mrx : components
import Input from "../../form/Input";
import Button from "../../form/Button";
import BottomSheet from "../../common/bottomSheet";
import CodeInput from "../../form/codeInput";
import ResendButton from "../../form/resendBtn";
// mrx : api routes
import { SEND_VERIFY_CODE, VALIDATE_USER } from "../../../pages/api/index";
// mrx : api config
import { GetUrl } from "../../../pages/api/config";
import BottomSheetCM from "../../common/bottomSheet";
import useWindowSize from "../../../hooks/useWindowSize";

export default function VeifyUser({ setPageSt, PageSt, DarkTeam }) {
  const phoneNumber = Cookies.get("User_PhoneNumber");
  const [Name, setName] = useState("")
  const [width, height] = useWindowSize();
  // check phone number
  useEffect(() => {
    if (!phoneNumber) {
      // setPageSt(0);
    }
  }, []);

  // mrx : ↓ --------------------- functions --------------------- ↓
  const disabledSt = () => {
    if (!Name?.length) {
      return true;
    } else {
      return false;
    }
  };

  const Verifyuser = () => {
    Cookies.set("userName", Name);
    setPageSt(1)
  }

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
      <MainBg DarkTeam={DarkTeam}>
        <Grid item container direction="row" xs={12} sm={12}>
          {/* logo top bobble */}
          <Grid item contianer>
            <img
              className={Style.TopLogo + " in-left"}
              src={
                DarkTeam
                  ? "./assets/Images/Main/Barber Top dark.png"
                  : "./assets/Images/Main/top-logo.png"
              }
              alt="top-logo"
            />{" "}
          </Grid>
          {/* first bobble */}
          <Grid item contianer>
            <img
              className={Style.TopBooble + " diemend-menu-mobile"}
              src="./assets/Images/Main/bobble-dark-1.png"
            />
          </Grid>
        </Grid>
        {/* second bobble */}
        <Grid className={Style.Bobble2Main} item contianer>
          <img
            className={Style.Bibble2Image}
            src="./assets/Images/Main/bobble-dark-2.png"
          />
        </Grid>

        {/* verify code img */}

        <BottomSheetCM ClassName={Style.RadyMainCard + " cssanimation sequence fadeInBottom " + Style.RadyMainCardExtra2} Height={width < 960 ? width <= 320 ? 155 : 180 : ''} topItem={TopItem()} HaveImg={false}>

          <>
            <Grid item contianer className="mainInfoCard">
              {/* detail about card */}
              <h3 className={DarkTeam ? "CardPupUpTitle WhiteFontOp70" : "CardPupUpTitle"}>We need your full name.</h3>
              {/* phone number input */}
              <Grid
                item
                container
                className="mt-30"
              >
                <Input
                  min={3}
                  type="text"
                  value={Name}
                  setValue={setName}
                  placeholder="Enter your full name"
                  lable="Your Full Name"
                />
              </Grid>
              {/* Button */}
              <Grid item container className="mainBtnAuth">
                <Button
                  onClick={() => Verifyuser()}
                  disabled={disabledSt()}
                  lable="Register"
                // loading={loadingBtn}
                // DarkTeam={DarkTeam}
                />
              </Grid>
            </Grid>
          </>
        </BottomSheetCM>

        {/* main cart */}
      </MainBg>
    </>
  );
}
