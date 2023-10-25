import axios from "axios";

// let token 

// export const setToken = () => {
//   const accessToken = localStorage.getItem('token');
//   token = accessToken;
// }

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkdHJhMzM0QGZlbWFpbC5jb20iLCJleHAiOjE2OTg1MTQ3MDcsImlkIjoiNjI4ZjE5YzItMmI4NC00YzVlLWJmYTQtMGE5M2Q2YWM3ZDBhIiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImFkdHJhdXNlcjQzIn0.S_k_nqPVwjVhHU9VZ9j35nSdC3qNn8-gUeC1_C35zn0"

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
