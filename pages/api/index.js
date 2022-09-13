// sa: get collection id
export const HEADER_BASE = {
  "content-type": "application/json",
  "Accept-Language": "fr-IR,fr;q=0.5",
};

// mrx :
import Cookies from "js-cookie";

// mrx : base url
export const BASE_URL = `https://happy-morse-80b7--bjm.iran.liara.run/api`;

// mrx : base image url
export const BASE_Image_Url = `http://localhost:5000`;

// Semd Verify code
export const SEND_VERIFY_CODE = (PhoneNumber) => `${BASE_URL}/users/SendVCode/${PhoneNumber}`;


// validate user 
export const VALIDATE_USER = (PhoneNumber, vCOde) => `${BASE_URL}/users/verify/${PhoneNumber}/${vCOde}`;