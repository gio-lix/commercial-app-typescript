// import {localStorageNames} from "../constsnt";
//
// export const getLocalStorage = (item) => {
//     if (typeof localStorage !== "undefined") {
//         if (item === localStorageNames.CART_ITEMS) {
//             return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : null;
//         }
//         return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];
//     } else {
//         return [];
//     }
// };
//
// export const DemoVersion = (item) => {
//     if (typeof localStorage !== "undefined") {
//         return JSON.parse(localStorage.getItem(item))
//     } else {
//         return []
//     }
// }