import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.201.186.255:9000/",
  timeout: 15000,
});

export default instance;
