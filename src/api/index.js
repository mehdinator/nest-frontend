import axios from "axios";
import Cookies from "js-cookie";
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:4000",
  withCredentials: true
});

const errHandler = err => {
  if (err.response && err.response.data) {
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,

  callback(code) {
    return service
      .post("/auth/nest/callback", { code })
      .then(response => {
        // return response;
        console.log("RESPONSE", response);
      })

      .catch(err => {
        console.log(err);
      });
  },

  isLoggedIn() {
    if (Cookies.get("nest_token")) {
      return true;
    }
    return false;
  }
};
