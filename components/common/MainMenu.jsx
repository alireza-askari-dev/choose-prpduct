import React, { useState, useContext } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton, Modal, Dialog, Slide, Backdrop, Box } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../styles/main/main.module.css";

// mrx : files ↓
import HomeSvg from "../../public/assets/Icons/Home-light.svg";
import HomeSelectedSVG from "../../public/assets/Icons/Home-selected.svg";

import AddSVG from "../../public/assets/Icons/add-light.svg";
import AddSelectedSVG from "../../public/assets/Icons/add-selected.svg";
import SearchSVG from "../../public/assets/Icons/Search.svg";
import SearchSelectedSVG from "../../public/assets/Icons/Selected-Search.svg";

// mrx : context ↓
import { Context } from "../../context/index";
import { Router } from "next/router";

// mrx : components ↓
import AddProduct from '../screen/homePage/addProduct';
import { useEffect } from "react";

export default function MainMenu({ getProductList, setPageSt }) {
  // gm : states ↓
  const {
    Menu,
    setMenu,
  } = useContext(Context);
  const [OpenAddProduct, setOpenAddProduct] = useState(false)

  const style = {
    position: 'absolute',
    bottom: '20%',
    width: '100%',
  };

  useEffect(() => {
    if (OpenAddProduct === false) {
      setMenu(0)
    }
  }, [OpenAddProduct])


  return (
    <div className={Style.MainMenu + " cssanimation sequence fadeInBottom"}>
      <div className={Style.C_MainMenu}>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(2); }} size="small">
            <img src={Menu == 2 ? SearchSelectedSVG.src : SearchSVG.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(1); setOpenAddProduct(true) }} size="small">
            <img src={Menu == 1 ? AddSelectedSVG.src : AddSVG.src} />
          </IconButton>
        </div>
        <div className={Style.P_IconMenu}>
          <IconButton onClick={() => { setMenu(0); setPageSt(1) }} size="small">
            <img src={Menu == 0 ? HomeSelectedSVG.src : HomeSvg.src} />
          </IconButton>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={OpenAddProduct}
        onClose={() => setOpenAddProduct(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Slide direction="up" in={OpenAddProduct}>
          <Box sx={style}>
            <AddProduct
              getProductList={getProductList}
              setPageSt={setOpenAddProduct}
            />
          </Box>
        </Slide>
      </Modal>
    </div >
  );
}
