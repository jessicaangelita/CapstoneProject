import axios from "axios";

// let token 

// export const setToken = () => {
//   const accessToken = localStorage.getItem('token');
//   token = accessToken;
// }

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhbG9AZW1haWwuY29tIiwiZXhwIjoxNzA1NDczNzc1LCJpZCI6IjcyN2MwOWQ1LTE5YzgtNGM4Zi04M2ViLTA4ODQzMDIyNDNjZCIsIm5hbWUiOiIiLCJ1c2VybmFtZSI6ImhhbG8xMjMifQ.kJZdwrRuRHAWZ57Pv1xOCUfLjsnY-x2NVW6IVgm1mmY"

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
