import axios from "axios";

const instance = axios.create({
  baseURL: "http://65.0.21.28:9000/",
  timeout: 15000,
});

export default instance;
