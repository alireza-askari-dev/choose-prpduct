import React, { useEffect, useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Backdrop, Box, Button, Grid, IconButton, Modal, Slide } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../styles/main/main.module.css";
import AuthStyle from '../../../styles/auth/Auth.module.css';

import MainMenu from "../../common/MainMenu";
import SideMenu from "./Components/SideMenu";
import Product from "./Components/product";

// mrx : files ↓
import ImageItem1 from "../../../public/assets/Home/112582_Rear_3-4_Web.jpg";
import ImageItem2 from "../../../public/assets/Home/162631682664400.png";
import ImageItem3 from "../../../public/assets/Home/dc4b04d78fcf5d825262ebb70137e0be.png";

// api
import { DeleteUrl, GetUrl } from "../../../pages/api/config";
import { BASE_Image_Url, DELETE_PRODUCT, GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../../../pages/api";
import { toast } from "react-toastify";
import ProductDetail from "./productDetail";
import RemoveItem from "./removeItem";

// mrx : components ↓

export default function HomePage({ setPageSt }) {
  // mrx : states ↓
  const [Products, setProducts] = useState([])
  const [OpenPD, setOpenPD] = useState(false)
  const [DeleteProduct, setDeleteProduct] = useState(false)
  const [ProductDt, setProductDt] = useState({})

  // create product api
  const getProductList = () => {
    GetUrl(GET_PRODUCTS).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          setProducts(res?.data?.data)
        } else {
          toast.error(res?.data?.message);
        }
      } else {
        toast.error("something went wrong !");
      }
    });
  }

  useEffect(() => {
    getProductList()
  }, [])

  const style = {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  };

  const GetProductDetail = (ID, ImgID) => {
    GetUrl(GET_PRODUCT_BY_ID(ID, ImgID)).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          setProductDt(res?.data?.data);
        } else {
          // toast.error(res?.data?.message);
        }
      } else {
        toast.error("something went wrong !");
      }
    });
  }

  const RemoveProduct = (ID) => {
    DeleteUrl(DELETE_PRODUCT(ID)).then((res, err) => {
      if (res && res.status === 200) {
        if (res?.data?.isSuccess) {
          toast.success(res?.data?.message);
          setDeleteProduct(false)
          setProducts(Products?.filter((item) => item?.id !== ID));
        } else {
          toast.error(res?.data?.message);
        }
      } else {
        toast.error("something went wrong !");
      }
    });
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
      <div className={Style.WhiteArea}>
        <div className={Style.C_WhiteArea}>
          {/* Start Components */}
          <p className={Style.titleLable}>Products</p>
          <Grid
            container
            direction="row"
            className={Style.mainProductList}
            spacing={2}
          >
            {
              Products?.length ? Products?.map((item) => (
                <Product
                  key={item?.id}
                  id={item?.id}
                  onClick={() => { setOpenPD(true); GetProductDetail(item?.id, item?.imageID) }}
                  code={item?.barcode}
                  img={BASE_Image_Url + item?.image}
                  setDeleteProduct={setDeleteProduct}
                />
              )) : (
                <>
                  <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                    className="mainSelectBarcode"
                    style={{ padding: "35px 15px", background: "#f3f3f3" }}
                  >
                    <p className="ForScanClickText">No products have been added yet</p>
                  </Grid>
                </>
              )
            }
          </Grid>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={OpenPD}
        onClose={() => setOpenPD(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={OpenPD}>
          <Box sx={style}>
            <ProductDetail ProductDt={ProductDt} setPageSt={setOpenPD} />
          </Box>
        </Slide>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={DeleteProduct}
        onClose={() => setDeleteProduct(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={DeleteProduct}>
          <Box sx={style}>
            <RemoveItem RemoveProduct={RemoveProduct} setClose={() => setDeleteProduct(false)} />
          </Box>
        </Slide>
      </Modal>
      <MainMenu getProductList={getProductList} setPageSt={setPageSt} />
    </div>
  );
}
