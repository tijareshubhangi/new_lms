import axios from "axios";

const instance = axios.create({
  baseURL: "http://65.1.3.201:3000/",
  timeout: 15000,
});

export default instance;
