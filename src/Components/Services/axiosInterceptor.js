import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.204.214.179:9000/",
  timeout: 15000,
});

export default instance;
