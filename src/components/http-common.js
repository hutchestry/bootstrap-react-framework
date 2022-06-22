import axios from "axios";

let domain = window.location.origin.split(':')[1];
let setDomain = (domain === '//172.18.0.1') ? domain : '//98.30.197.177';

export default axios.create({
  baseURL: `http:${setDomain}:5000`,
  // baseURL: "http://localhost:9000/api", // mock api, local
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": true
  }
});