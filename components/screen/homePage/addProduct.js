import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

// mrx : material ui ↓
import { Grid, IconButton, Slide, Fade, Modal, Backdrop, Box } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";
import AuthStyle from '../../../styles/auth/Auth.module.css';

// mrx : files ↓
import ArrowRight from "../../../public/assets/Icons/Arrow right -.svg";
import CloseIcon from "../../../public/assets/Icons/Close.svg";
import UploadIcon from "../../../public/assets/Icons/uploadimage.svg";
import ConsignmentsICOn from "../../../public/assets/Icons/Logout.svg";
import TrashIcon from "../../../public/assets/Icons/trash-light.svg";

// mrx : components ↓
import Scanner from '../../form/barcodeScanner/Scanner';
import Button from '../../form/Button';
import ResendBtn from '../../form/resendBtn';
import { DeleteUrl, PostUrl } from "../../../pages/api/config";
import { toast } from "react-toastify";
import { ADD_IMAGE, CREATE_PRODUCT, BASE_Image_Url, DELETE_IMAGE } from "../../../pages/api";

export default function AddProduct({ getProductList, setPageSt }) {
  // gm : states ↓
  const [ScanModal, setScanModal] = useState(false);
  const [UploadPicModal, setUploadPicModal] = useState(false);

  const [first, setfirst] = useState({
    modal: false,
    scanCode: '',
    scanSuccess: false,
    results: false
  })

  const [ScanedCode, setScanedCode] = useState('')

  const [uploadStatus, setUploadStatus] = useState("import");
  const [Uploading, setUploading] = useState(true);
  const [Images, setImages] = useState([]);
  const [RandomId, setRandomId] = useState('');

  // dropzone drag and drop uploader
  const { fileRejections, acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg,image/png,image/tiff,image/eps', disabled: uploadStatus === "import" ? false : false
  });

  // mrx : handle upload file api call
  const handleUploadFile = () => {
    handleUploadFileApi();
  };

  // create same randome id
  useEffect(() => {
    let testID = uuidv4();
    setRandomId(testID)
  }, [])

  // upload images api
  const handleUploadFileApi = () => {
    setUploadStatus("Uploading")
    setUploading(true);
    let File = new FormData();
    File.append("file", acceptedFiles[0]);
    PostUrl(ADD_IMAGE(0, RandomId),
      File
    ).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          setUploading(false);
          setUploadStatus("Uploaded");
          setImages((prev) => [...prev, {
            id: uuidv4(),
            url: res?.data?.data?.url
          }])
        } else {
          handleErrorUploadFile();
          toast.error(res?.data?.message);
          setUploading(false);
        }
      } else {
        toast.error("something went wrong !");
      }
    });
  }

  // create product api
  const CreateProduct = () => {
    PostUrl(CREATE_PRODUCT, {
      name: "DEV",
      imageID: RandomId,
      barcode: ScanedCode,
      image: Images?.map((item) => item?.url)[0],
    }
    ).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          toast.success('کالا با موفقیت اضافه شد');
          clearStates();
          getProductList();
        } else {
          toast.error(res?.data?.message);
        }
      } else {
        toast.error("something went wrong !");
      }
    });
  }

  // celar all data
  const clearStates = () => {
    setScanedCode('');
    setImages([]);
    setRandomId('');
    setScanModal(false);
    setUploadPicModal(false);
    setPageSt(false);
  }

  // change uploading st
  const handleErrorUploadFile = (e) => {
    setUploadStatus("import");
  };

  // check image upload
  useEffect(() => {
    if (acceptedFiles?.length >= 1) {
      handleUploadFile()
    }
  }, [acceptedFiles])

  // check image not upload error !!
  useEffect(() => {
    if (fileRejections?.length >= 1) {
      handleErrorUploadFile()
    }
  }, [fileRejections])

  // when barcode detected
  const onDetected = (result) => {
    setScanedCode(result?.codeResult?.code)
    setfirst({
      modal: false,
      scanCode: result ? result?.codeResult?.code : '',
      scanSuccess: result ? true : false,
      results: result
    });
    setScanModal(result ? false : true)
  }

  // modal stayle
  const style = {
    position: 'absolute',
    bottom: '20%',
    width: '100%',
  };

  // remove image static
  const removeImage = (id, url) => {
    DeleteUrl(DELETE_IMAGE, {
      url: url,
    }
    ).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          setImages(Images?.filter((item) => item?.id !== id));
        } else {
          toast.error(res?.data?.message);
        }
      } else {
        toast.error("something went wrong !");
      }
    });

  }

  return (
    <>
      {/* White Area */}
      <div className={Style.WhiteArea + " MainScanBarcode"}>
        <div className={Style.C_WhiteArea}>
          {/* Start Components */}
          <p className={Style.titleLable}>افزودن کالا <span className="Saew">/ اسکن بارکد</span></p>
          <IconButton onClick={() => setPageSt(false)} className="ArrowRightBtn"><img src={ArrowRight.src} /></IconButton>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              container
              className="mainBtnAuth mt-10"
            >
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                className="mainSelectBarcode"
                style={{ position: "relative" }}
                onClick={() => ScanedCode ? "" : setScanModal(true)}
              >
                {ScanedCode ? (
                  <Grid>
                    <span>{ScanedCode}</span>
                    <p
                      onClick={() => setScanModal(true)}
                      style={{
                        padding: "0px",
                        margin: "0px",
                        position: "relative",
                        top: "11px"
                      }}
                      className="ForScanClickText">اسکن دوباره بارکد<img
                        style={{
                          position: "relative",
                          top: "8px",
                          left: "-6px"
                        }} src={ConsignmentsICOn.src} /></p>
                  </Grid>
                )

                  : (
                    <>
                      <p className="ForScanClickText">برای اسکن بارکد کلیک کنید</p>
                    </>
                  )}
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                style={{ marginTop: 20 }}
              >
                <Grid
                  item
                  xs={6}
                  container
                >
                  <Button
                    disabled={!ScanedCode}
                    onClick={() => setUploadPicModal(true)}
                    lable="مرحله بعد"
                  />
                </Grid>

                <Grid
                  item
                  container
                  xs={6}
                >

                </Grid>
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
        <Slide direction="up" in={ScanModal}>
          <div className={Style.WhiteArea + " scanBarcodeMainWhite"}>
            <div
              className={Style.C_WhiteArea}
            >

              <p className={Style.titleLable}>درحال اسکن بارد کالا</p>
              <IconButton onClick={() => setScanModal(false)} className="ArrowRightBtn"><img src={CloseIcon.src} /></IconButton>
              <Scanner handleScan={onDetected} />
              <span
                style={{
                  fontFamily: 'Default-2',
                  letterSpacing: "7px",
                  textAlign: "center",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "center"
                }}
              >{ScanedCode}</span>
            </div>
          </div>
        </Slide>
      </Modal>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={UploadPicModal}
        onClose={() => setUploadPicModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Slide direction="up" in={UploadPicModal}>
          <Box sx={style}>
            <div className={Style.WhiteArea + " scanBarcodeMainWhite2"}>
              <div
                className={Style.C_WhiteArea}
              >
                <p className={Style.titleLable}>آپلود عکس کالا</p>
                <IconButton onClick={() => setUploadPicModal(false)} className="ArrowRightBtn"><img src={CloseIcon.src} /></IconButton>

                {
                  !Images?.length ? (
                    <Grid
                      item
                      container
                      {...getRootProps({ className: 'dropzone' })}
                      alignItems="center"
                      justifyContent="center"
                      className="mainSelectBarcode"
                      style={{ padding: "35px 45px", background: "#f3f3f3" }}
                    >
                      <input {...getInputProps()} />
                      <IconButton style={{ opacity: "0.5" }} onClick={() => setScanModal(false)} ><img src={UploadIcon.src} /></IconButton>
                      <p className="ForScanClickText">برای آپلود عکس کالا کلیک کنید</p>
                    </Grid>
                  ) : (
                    <>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className="mainPic"
                      >
                        {
                          Images?.map((item) => (
                            <Grid
                              item
                              key={item?.id}
                              xs={6}
                              md={6}
                              lg={6}
                              className="mainImageIploaded"
                            >
                              <img className="ImageUploaded" src={BASE_Image_Url + item.url} />
                              <IconButton
                                className="trahPic"
                                onClick={() => removeImage(item?.id, item?.url)}
                              >
                                <img src={TrashIcon.src} />
                              </IconButton>
                            </Grid>
                          ))
                        }
                      </Grid>

                    </>
                  )
                }
                {
                  Images?.length ? (
                    <>
                      <Grid
                        item
                        container
                        style={{ marginTop: 0, float: 'left', direction: "ltr" }}
                        {...getRootProps({ className: 'dropzone' })}
                      >
                        <ResendBtn width={45} lable="آپلود عکس جدید" />
                        <input {...getInputProps()} />
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )
                }
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="center"
                  style={{ marginTop: 20 }}
                >
                  <Grid
                    item
                    xs={12}
                    container
                    style={{ marginTop: "20px" }}
                  >
                    <Button
                      disabled={!Images?.length}
                      onClick={() => CreateProduct()}
                      lable="افزودن کالا"
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Box>
        </Slide>
      </Modal>
      {/* <MainMenu setPageSt={setPageSt} /> */}
    </>
  );
}
