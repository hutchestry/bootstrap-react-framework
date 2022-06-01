import axios from "axios";

let domain = window.location.origin.split(':')[1];
export default axios.create({
  baseURL: `http:${domain}:5000`,
  // baseURL: "http://localhost:9000/api", // mock api, local
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": true
  }
});