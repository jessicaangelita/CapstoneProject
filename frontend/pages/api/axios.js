import axios from "axios";

// let token 

// export const setToken = () => {
//   const accessToken = localStorage.getItem('token');
//   token = accessToken;
// }

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYXRyaWNlQGdtYWlsLmNvbSIsImV4cCI6MTcwMTYwMTg1NSwiaWQiOiIxMzIzMWYyOS0xYTVjLTRkMjEtOWRjZC1lNTI0Y2U1YWU1MGMiLCJuYW1lIjoiIiwidXNlcm5hbWUiOiJiZWF0cmljZWdyYWNpYTEifQ.zGP42R3c_cZDBzzS9up9L4HF-D-bMekJsy7ctomjikc"

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYXRyaWNlQGdtYWlsLmNvbSIsImV4cCI6MTY5MzUwNjYwMiwiaWQiOiIxZDBkMDdlYS0wODJmLTQ1YjgtODYzMi0xNDRiZmRjNjA3ZDUiLCJuYW1lIjoiIiwidXNlcm5hbWUiOiJiZWF0cmljZSJ9.u8h_HvrHKJRmCyMNTKdgj3ew2tyWxzSltKPDehB64QI";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphamFuZ0BlbWFpbC5jb20iLCJleHAiOjE2OTM1MTQ2OTIsImlkIjoiZDdmYTY3ZjAtYmFlNS00MDQ5LWE3YTUtNDBlNjIyZTBkYzk1IiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImphamFuZ2phbmcifQ.z615hX6A5g4oIhWQrjzdKqIM0BT0Ppldq4DZzPCaxbI";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
