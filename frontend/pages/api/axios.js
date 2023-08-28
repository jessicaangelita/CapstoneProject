import axios from "axios";

let token 

export const setToken = () => {
  const accessToken = localStorage.getItem('token');
  token = accessToken;
}

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYXRyaWNlQGdtYWlsLmNvbSIsImV4cCI6MTY5MzUwNjYwMiwiaWQiOiIxZDBkMDdlYS0wODJmLTQ1YjgtODYzMi0xNDRiZmRjNjA3ZDUiLCJuYW1lIjoiIiwidXNlcm5hbWUiOiJiZWF0cmljZSJ9.u8h_HvrHKJRmCyMNTKdgj3ew2tyWxzSltKPDehB64QI";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
