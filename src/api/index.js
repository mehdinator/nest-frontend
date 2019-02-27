import axios from "axios";

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
  login() {
    return service
      .get("/auth/nest")
      .then(response => {})

      .catch(err => {
        console.log(err);
      });
  }
};
