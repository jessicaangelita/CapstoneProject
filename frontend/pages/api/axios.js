import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphamFuZ0BlbWFpbC5jb20iLCJleHAiOjE2OTM1MTQ2OTIsImlkIjoiZDdmYTY3ZjAtYmFlNS00MDQ5LWE3YTUtNDBlNjIyZTBkYzk1IiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImphamFuZ2phbmcifQ.z615hX6A5g4oIhWQrjzdKqIM0BT0Ppldq4DZzPCaxbI";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
