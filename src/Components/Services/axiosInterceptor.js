import axios from "axios";

const instance = axios.create({
  baseURL: "http://65.2.3.95:9000/",
  timeout: 15000,
});

export default instance;
