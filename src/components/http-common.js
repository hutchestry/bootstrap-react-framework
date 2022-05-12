import axios from "axios";
export default axios.create({
  baseURL: "http://98.30.197.177:5000",
  // baseURL: "http://localhost:9000",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": true
  }
});