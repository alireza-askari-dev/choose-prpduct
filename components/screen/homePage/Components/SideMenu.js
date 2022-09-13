import React, { useState } from "react";
import Link from "next/link";

// mrx : material ui ↓
import { Grid, IconButton, Modal, Slide } from "@material-ui/core";

// mrx : styles ↓
import Style from "../../../../styles/main/main.module.css";

// mrx : files ↓
import MenuSvg from "../../../../public/assets/Icons/Search.svg";
import ProfPng from "../../../../public/assets/Images/Main/TestProf.png";
import ChangeProfPng from "../../../../public/assets/Images/Main/ImgChangeProf.png";
import ItemSideMenu from "./ItemSideMenu";
import SettingSvg from "../../../../public/assets/Icons/Settings.svg";
import NotificationSvg from "../../../../public/assets/Icons/Notification.svg";
import ProfileSvg from "../../../../public/assets/Icons/Profile.svg";
import DiscountSvg from "../../../../public/assets/Icons/Discount.svg";
import TruckSvg from "../../../../public/assets/Icons/Truck.svg";
import HistorySvg from "../../../../public/assets/Icons/History.svg";
import SkinSvg from "../../../../public/assets/Icons/Skin.svg";

// mrx : components ↓

export default function SideMenu() {
  // gm : states ↓
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <IconButton size="small" onClick={() => setOpenMenu(true)}>
        <img src={MenuSvg.src} />
      </IconButton>

      <Modal
        open={OpenMenu}
        onClose={() => setOpenMenu(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Slide direction="left" in={OpenMenu} mountOnEnter unmountOnExit>
          <div className={Style.BoxSideMenu}>
            {/* Profile */}
            <div className={Style.Profile}>
              <div className={Style.P_ImgProf}>
                <img src={ProfPng.src} className={Style.ProfileImage}/>
                <img
                  src={ChangeProfPng.src}
                  className={Style.ImgChangeProfPng}
                />
              </div>
              <div className={Style.UserName}>علیرضا عسکری</div>
            </div>

            {/* Items */} 
            <div className={Style.P_ItemSideMenu}>
                <ItemSideMenu Title="تنظیمات" Icon={SettingSvg}/>
                <ItemSideMenu Title="اعلان ها" Icon={NotificationSvg}/>
                <ItemSideMenu Title="پروفایل کاربری" Icon={ProfileSvg}/>
                <ItemSideMenu Title="تخفیف ها" Icon={DiscountSvg}/>
                <ItemSideMenu Title="آدرس ها" Icon={TruckSvg}/>
                <ItemSideMenu Title="انتخاب نوع پوست" Icon={SkinSvg}/>
            </div>

          </div>
        </Slide>
      </Modal>
    </div>
  );
}
