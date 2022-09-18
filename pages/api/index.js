// sa: get collection id
export const HEADER_BASE = {
  "content-type": "application/json",
  "Accept-Language": "fr-IR,fr;q=0.5",
};

// mrx :
import Cookies from "js-cookie";

// mrx : base url
export const BASE_URL = `https://choose-product.iran.liara.run/api`;

// mrx : base image url
export const BASE_Image_Url = `https://choose-product.iran.liara.run`;


// upload image
export const ADD_IMAGE = (ID, uuid) => `${BASE_URL}/products/upload-image/${0}/${uuid}`;

// create product
export const CREATE_PRODUCT = `${BASE_URL}/products/createProduct`;

// Semd Verify code
export const GET_PRODUCTS = `${BASE_URL}/products`;

// Semd Verify code
export const GET_PRODUCT_BY_ID = (id, imgID) => `${BASE_URL}/products/${id}/${imgID}`;

// Semd Verify code
export const DELETE_IMAGE = `${BASE_URL}/products/delete-image/0`;

// Semd Verify code
export const DELETE_PRODUCT = (id) => `${BASE_URL}/products/${id}`;
