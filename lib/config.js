let production = false;
let app = "http://localhost:3000";
let api = "http://127.0.0.1:8000/api";
let appProd = "https://simpade.vercel.app";
let apiProd = "http://127.0.0.1:8000/api";

const appUrl = (url = false) => {
  if (url) {
    return production ? appProd + url : app + url;
  } else {
    return production ? appProd : app;
  }
};

const apiUrl = (url) => {
  return production ? apiProd + url : api + url;
};

export { apiUrl, appUrl };
