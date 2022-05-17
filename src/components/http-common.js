import axios from "axios";

export default axios.create({
  baseURL: "http://98.30.197.177:5000", // External 
  // baseURL: "http://localhost:9000/api", // mock api, local
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": true
  }
});