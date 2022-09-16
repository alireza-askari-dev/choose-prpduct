import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton, Fade, Modal, Backdrop } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";
import AuthStyle from '../../../styles/auth/Auth.module.css';

// mrx : files ↓
import ArrowRight from "../../../public/assets/Icons/Arrow right -.svg";
import CloseIcon from "../../../public/assets/Icons/Close.svg";

// mrx : components ↓
import Scanner from '../../form/barcodeScanner/Scanner';
import Result from '../../form/barcodeScanner/Result';
import Button from '../../form/Button';

export default function AddProduct({ setPageSt }) {
  // gm : states ↓
  const [ScanModal, setScanModal] = useState(false);
  const [first, setfirst] = useState({
    modal: false,
    scanCode: '',
    scanSuccess: false,
    results: false
  })

  const [ScanedCode, setScanedCode] = useState('')


  const onDetected = (result) => {
    console.log("mamad " + JSON.stringify(result))
    setScanedCode(result?.codeResult?.code)
    setfirst({
      modal: false,
      scanCode: result ? result?.codeResult?.code : '',
      scanSuccess: result ? true : false,
      results: result
    });
    setScanModal(result ? false : true)
  }

  return (
    <div className={Style.OrageBg}>
      {/* tilte */}
      <div className={Style.P_BarberTitle}>
        <Grid
          item
          container
          direction='row'
          xs={12}
          sm={12}
        >
          {/* logo top bobble */}
          <Grid item contianer>
            <img className={AuthStyle.TopLogo2 + " in-left"} src='./assets/Images/Main/top-logo.png' alt="top-logo" />
          </Grid>

        </Grid>
        {/* <div>
          <SideMenu />
        </div> */}
      </div>
      {/* White Area */}
      <div className={Style.WhiteArea} >
        <div className={Style.C_WhiteArea}>
          {/* Start Components */}
          <p className={Style.titleLable}>افزودن کالا</p>
          <IconButton onClick={() => setPageSt(1)} className="ArrowRightBtn"><img src={ArrowRight.src} /></IconButton>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              container
              className="mainBtnAuth mt-30"
            >

              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                className="mainSelectBarcode"
                onClick={() => setScanModal(true)}
                >
                {ScanedCode ? ScanedCode : (
                  <>
                    <p className="ForScanClickText">برای اسکن بارکد کلیک کنید</p>
                  </>
                )}
              </Grid>
              <Grid
                item
                container
                style={{ marginTop: 10 }}
              >
                {ScanedCode ? (
                  <Button
                    onClick={() => setScanModal(true)}
                    lable="اسکن دوباره"
                  />
                ) : (
                  <></>
                )}

              </Grid>

            </Grid>
          </Grid>
        </div>
      </div>
      <Modal
        open={ScanModal}
        onClose={() => setScanModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={ScanModal}>
          <div className={Style.WhiteArea + " scanBarcodeMainWhite"}>
            <div
              className={Style.C_WhiteArea}
            >

              <p className={Style.titleLable}>درحال اسکن بارد کالا</p>
              <IconButton onClick={() => setPageSt(1)} className="ArrowRightBtn"><img src={CloseIcon.src} /></IconButton>
              <Scanner handleScan={onDetected} />
            </div>
          </div>
        </Fade>
      </Modal>
      {/* <MainMenu setPageSt={setPageSt} /> */}
    </div >
  );
}
